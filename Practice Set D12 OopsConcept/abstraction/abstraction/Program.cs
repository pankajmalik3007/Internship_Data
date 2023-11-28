using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace abstraction
{
    class program
    {
        abstract class op
        {
            public abstract void add();
            public void div()
            {
                int a = 20;
                int b = 2;
                int c = b / 2;
                Console.WriteLine("division is = "+c);
            }
        }
        class Arithmetic : op
        {
            public override void add()
            {
                int a = 20;
                int b = 2;
                int c = b + 2;
                Console.WriteLine("Addition is = "+c);
            }
        }
        static void Main(string[] args)
        {
            Arithmetic z = new Arithmetic();
            op at = z;
            z.add();
            at.div();
        }
    }
}
