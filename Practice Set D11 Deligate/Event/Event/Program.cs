using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Event
{
    public class Logic
    {
        public event EventHandler ProcessCompleted; //Inbuilt event handler event

        //Create Method which is starting point
        public void Even()
        {
            Console.WriteLine("Start Process :- ");
            int num = 5;
          if(num %2==0)
            {
                Console.WriteLine("This no is even no ");

            }
            else
            {
                Console.WriteLine("It is a odd Number");
            }

            //It check the process is empty or not
            OnProcessCompleted(EventArgs.Empty);
        }

        public virtual void OnProcessCompleted(EventArgs e)
        {
            ProcessCompleted?.Invoke(this, e);
        }
    }
    public class Program
    {
        static void Main(string[] args)
        {
            Logic bl = new Logic();
            bl.ProcessCompleted += bl_ProcessCompleted; // register with an event
            bl.Even();
        }

        //
        public static void bl_ProcessCompleted(object sender, EventArgs e)
        {
            Console.WriteLine("Process Completed!");
        }
    }

}
