import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from '../components/Footer';
const Contact = () => {
  const conts = [
    {
      title: "Address",
      p: "NECA House, Plot A2, Hakeem Balogun Way, Alausa, Lagos, Nigeria",
      icon: <FaLocationDot color='fff' size={30}/>,
    },
    {
      title: "Email",
      p: "info@techpay.ng",
      icon: <MdEmail  color='fff' size={30}/>,
    },
    {
      title: "Phone",
      p: "(+234) 8072589575",
      icon: <BiSolidPhoneCall color='fff' size={30}/>,
    },
  ]
  return (
    <div className='z-[1] w-full h-[100vh] bg-[#fff] relative pt-[130px] mb-[130px]'>
    <h2 className='text-[80px] text-[#3e4095] text-center font-semibold'>Contact Us</h2>
    <p className='text-slate-700 text-center mt-[10px]'>LINK US ON THE ADDRESS BELOW.</p>
    <div className='flex items-center gap-[100px]'>
      <div className="flex flex-col items-center justify-between gap-10 mt-8 ">
          {conts.map((cont, index) => {
            return (
              <div key={index} className="w-full flex items-center pl-[65px]">
                  <div className='relative p-[25px] shadow-md rounded-full bg-gradient-to-r from-blue-500 to-orange-500 mr-[20px]'>
                    {cont.icon}
                  </div>
                <div>
                <span className="text-[#3e4095] text-[28px] font-medium">{cont.title}</span>
                <p className="text-slate-700 font-medium text-[17px]">{cont.p}</p>
                </div>
              </div>
            
            );
          })}
      </div>
      <div className='mt-12'>
      <div class="col-lg-7 col-md-12">
      <div class="contact-form">
          <form method="post" action="/Techpay/Contactus">
              <div class="clearfix"></div>
              <div class="grid grid-cols-2 gap-4">

                  <div class="col-span-1">
                      <div class="form-group">
                          <input type="text" class="form-control" required data-error="Please enter your Client name" placeholder="FullName" data-val="true" data-val-required="The Client_Name field is required." id="Client_Name" name="Client_Name" value="" />
                      </div>
                  </div>

                  <div class="col-span-1">
                      <div class="form-group">
                          <input type="email" class="form-control" required data-error="Please enter your email" placeholder="Email" data-val="true" data-val-email="Invalid Email Address" data-val-regex="Email is not valid." data-val-regex-pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" data-val-required="The Email field is required." id="Email" name="Email" value="" />
                      </div>
                  </div>

                  <div class="col-span-1">
                      <div class="form-group">
                          <input type="text" required data-error="Please enter your number" class="form-control" placeholder="Phone" data-val="true" data-val-required="Mobile Number is required." id="Phone_No" name="Phone_No" value="" />
                      </div>
                  </div>

                  <div class="col-span-1">
                      <div class="form-group">
                          <input type="text" class="form-control" required data-error="Please enter your subject" placeholder="Subject" data-val="true" data-val-required="The Subject field is required." id="Subject" name="Subject" value="" />
                      </div>
                  </div>

                  <div class="col-span-1">
                      <div class="form-group">
                          <select class="form-control" id="Country" name="Country">
                              <option value="">Select Country</option>
                              <option value="Nigeria" selected>Nigeria</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="United States of America">United States of America</option>
                          </select>
                          
                      </div>
                  </div>

                  <div class="col-span-1">
                      <div class="form-group">
                          <select class="form-control" id="ProductType" name="ProductType">
                              <option value="" selected>Select Product Type</option>
                              <option value="TechPay Mobile Collection">TechPay Mobile Collection</option>
                              <option value="BroadPay Collection Application">TechPay Collection Application</option>
                              <option value="Techpay Wallet">Techpay Wallet</option>
                              <option value="APIs">APIs</option>
                          </select>
                          
                      </div>
                  </div>

                  <div class="col-span-2">
                      <div class="form-group">
                          <textarea class="form-control" cols="30" rows="6" required data-error="Write your message" placeholder="How can we help you?" data-val="true" data-val-required="The MessageBody field is required." id="MessageBody" name="MessageBody"></textarea>
                      </div>
                  </div>
                  <div class="buttons">
                    <button className='bg-gradient-to-r from-blue-500 via-blue-800 to-purple-900 text-white w-[80px] h-[40px] rounded-[8px] cursor-pointer'>SEND</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
      </div>
    </div>

    <div className="w-full absolute  top-[750px] bg-gradient-to-br from-blue-500 to-indigo-900 h-[200px] z-10"></div>

    <div className='mt-[200px]'></div>

    <Footer />
</div>

  )
}

export default Contact
