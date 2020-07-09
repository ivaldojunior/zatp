using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace zatp_web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class zoomController : ControllerBase
    {
         [HttpGet]
        public List<string> Get()
        {
           return new List<string>() {"Teste1", "Teste2"};
        }

    }


}