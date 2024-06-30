using Microsoft.AspNetCore.Mvc;

namespace SimpleTaskManagement.WebApp.Controllers;

[ApiController]
[Route("[controller]")]
public class ToDoListController : ControllerBase
{
    private readonly ILogger<ToDoListController> _logger;

    public ToDoListController(ILogger<ToDoListController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public bool Get()
    {
        return true;
    }
    

}