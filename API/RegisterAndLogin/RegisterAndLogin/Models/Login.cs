using System.ComponentModel.DataAnnotations;

namespace RegisterAndLogin.Models
{
    public class Login
    {

        [Required(ErrorMessage = "The Email field is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "The Password field is required.")]
        public string Password { get; set; }
    }
}
