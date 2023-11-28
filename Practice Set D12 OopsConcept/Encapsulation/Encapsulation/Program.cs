using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encapsulation
{
    public class StudInfo
    {
        private String studentName;
        private int studentAge;
        public String Name
        {
            get { return studentName; }

            set { studentName = value; }
        }
          public int Age 
        {

            get { return studentAge; }

            set { studentAge = value; }
        }
    }

    
    class program
    {
        static public void Main()
        {
            StudInfo obj = new StudInfo();
            obj.Name = "Pankaj Malik";
            obj.Age = 21;
            Console.WriteLine(" Name : " + obj.Name);
            Console.WriteLine(" Age : " + obj.Age);
        }
    }
}

