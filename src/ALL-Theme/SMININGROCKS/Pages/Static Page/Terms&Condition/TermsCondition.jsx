import React, { useEffect } from 'react';
import "./TermsCondition.css";
import { storImagePath } from '../../../Utils/globalFunctions/GlobalFunction';
import logo from '../../assets/Logo1.png'
import Footer from '../../Components/home/Footer/Footer';

function TermsAndConditions() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="tncbannerpart">
        <img src={`${storImagePath()}/images/HomePage/Terms-and-Condtions/TermConditionMainBanner.jpg`} alt="#mainbanner" className="mainbanner_tnc" />
        <div><img src={logo} className="tnclogo" alt="#logo" /></div>
      </div>
      <div>
        <div className="tnctitle centerall_tnc">TERMS AND CONDITIONS</div>
        <div className="tnc_content">
          These terms and conditions apply to Web site located at www.elvee.in and It is a basic terms and condition and please it carefully.
          By using the site, you agree to be bound by these TERMS AND CONDITIONS.
        </div>
        <div className="contentboxtnc">
          <div className="tnctitle_2">Product Availability</div>
          <div className="tnc_content">All of our jewelry is designed and manufactured on-site. We develop new designs by brand wise such as modern jewellerires, high fashion jewelleries
            occassional orianted jewellery, plain gold jewelleries at every months. These new designs will appeare on our website also we present new products on
            gem and jewellery exhibitions at india and international sectors.
          </div>
          <br /><br />
          <div className="tnctitle_2">Information on our Site</div>
          <div className="tnc_content">We make every effort to ensure that our online catalog is as accurate and complete as possible. 
            To allow you to view our pieces in full detail, some pieces may appear larger or smaller than their actual 
            size and weight in our product images; and since every computer monitor is set differently, size may vary slightly.                
          </div>
          <br /><br />
          <div className="tnctitle_2">Return Policy</div>
          <div className="tnc_content">We committed to complete customer satisfaction. We take pride in the quality and workmanship of our merchandise 
            manufactured in our state-of-the-art facility, and we are confident that you will be completely satisfied. The contents of 
            the package must be in their original condition and secure within the box. For your security do not indicate the contents 
            of the package on the exterior of the box.
          </div>
          <br /><br />
          <div className="tnctitle_2">Shipping Policy</div>
          <div className="tnc_content">All of our shipments will be delivered using Indian Courier as well as international couriors. All custom orders will be shipped the following day 
            when your order is completed.
          </div>
          <br /><br />
          <div className="tnctitle_2">Limited Warranty</div>
          <div className="tnc_content">Our guarantee is simple and straightforward. If something is wrong due to faulty workmanship, we take care of it. It's a fair way of doing business. 
            That being said, precious metals erode and stones can become damaged over time. When normal wear occurs, repairs can be done in house by our expert staff 
            at the normal repair fee. Any work performed by a jeweler other than Elvee automatically voids the warranty. It is the responsibility of the customer to 
            maintain insurance against loss or damage not covered by the warranty.
          </div>
          <br /><br />
          <div className="tnc_content">* The policy of terms and condition will be change after you cover the membership and above policy is consider as basic policy for non-membership customers.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TermsAndConditions;
