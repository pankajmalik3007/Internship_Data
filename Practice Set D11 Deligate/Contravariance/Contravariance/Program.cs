using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contravariance
{
    public class surname                                                
    {

    }
    public class fname : surname                                                
    {

    }
    public delegate surname Del(fname b);                                       
    public class Program
    {
        public static surname name(fname b1)
        {
            Console.WriteLine("This is surname");
            return new surname();
        }
        public static fname name1(fname b1)
        {
            Console.WriteLine("this if first name");
            return new fname();
        }

        static void Main(string[] args)
        {
            Del del = name;

            del += name1;

            surname a = del(new fname());
        }
    }
}
