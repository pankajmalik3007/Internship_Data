using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Composition
{
    internal class Program
    {
        public class Employee
        {
            public string empname { get; set; }
            public int empid { get; set; }
            public string mobno { get; set; }
        }

        public class Adress
        {
            public string city { get; set; }
            public string country { get; set; }
            public string area { get; set; }
            public int pincode { get; set; }
        }
        static void Main(string[] args)
        {
            Employee emp = new Employee();
            emp.empname = "pankaj";
            emp.empid = 1;
            emp.mobno = "9284";

            Adress adress = new Adress();
            adress.city = "Shirdi";
            adress.country = "India";
            adress.area = "Kop";
            adress.pincode = 1;

            Console.WriteLine(emp.empname);
            Console.WriteLine(emp.empid);
            Console.WriteLine(emp.mobno);

            Console.WriteLine(adress.city);
            Console.WriteLine(adress.country);
            Console.WriteLine(adress.area);
            Console.WriteLine(adress.pincode);

        }
    }
}
