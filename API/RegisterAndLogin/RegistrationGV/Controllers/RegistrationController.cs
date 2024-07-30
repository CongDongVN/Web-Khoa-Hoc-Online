using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RegistrationGV.Models;
using System.Data.SqlClient;

namespace RegistrationGV.Controllers
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
        public string registration(Registration registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("con").ToString());
            SqlCommand cmd = new SqlCommand("INSERT INTO GIANGVIEN(Email,Password,Sdt,Name,Birth,Tinh,Quan) VALUES('" + registration.Email + "', '" + registration.Password + "','" + registration.Sdt + "', '" + registration.Name + "','" + registration.Birth + "', '" + registration.Tinh + "', '" + registration.Quan + "')");
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if (i > 0)
            {
                return "Data Inserted";
            }
            else
            {

                return "Error";
            }
        }
    }
}
