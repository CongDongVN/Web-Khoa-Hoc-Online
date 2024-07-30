using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RegisterAndLogin.Models;
using System.Data;
using System.Data.SqlClient;

namespace RegisterAndLogin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("registration")]
        public IActionResult Registration(Registration registration)
        {
            string connectionString = _configuration.GetConnectionString("con").ToString();
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                string query = "INSERT INTO Registration (UserName, Password, Email, Birth, IsActive) VALUES (@UserName, @Password, @Email, @Birth, @IsActive)";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    cmd.Parameters.AddWithValue("@UserName", registration.UserName);
                    cmd.Parameters.AddWithValue("@Password", HashPassword(registration.Password)); // Nên dùng phương pháp mã hóa mật khẩu
                    cmd.Parameters.AddWithValue("@Email", registration.Email);
                    cmd.Parameters.AddWithValue("@Birth", registration.Birth);
                    cmd.Parameters.AddWithValue("@IsActive", registration.IsActive);

                    con.Open();
                    int i = cmd.ExecuteNonQuery();
                    if (i > 0)
                    {
                        return Ok("Data Inserted");
                    }
                    else
                    {
                        return StatusCode(500, "Error inserting data");
                    }
                }
            }
        }

        private string HashPassword(string password)
        {
            // Implement your password hashing logic here
            return password; // This should be replaced with actual hashing logic
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(Login login)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("con").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Registration WHERE Email = @Email AND Password = @Password AND IsActive = 1", con);
            da.SelectCommand.Parameters.AddWithValue("@Email", login.Email);
            da.SelectCommand.Parameters.AddWithValue("@Password", login.Password);
            DataTable dt = new DataTable();
            da.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                return Ok(new { Message = "Login Successful" });
            }
            else
            {
                return Unauthorized("Invalid Credentials");
            }
        }

    }

}

