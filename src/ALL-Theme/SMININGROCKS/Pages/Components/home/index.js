import React, { useEffect, useState } from 'react'
import './index.css';
import Video from './topVideo/Video';
import SmilingRock from './smiling_Rock/SmilingRock';
import FestiveFinds from './FestiveFind/FestiveFinds';
import DaimondEveyone from './DaimondsEveryone/DaimondEveyone';
import Header from './Header/Header';
import ShopByCategory from './shopByCategory/ShopByCategory';
import SmilingBrides from './SmilingBrides/SmilingBrides';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import ShopifySection from './shopifySection/ShopifySection';
import SustainAbility from '../sustainAbility/SustainAbility';
import ShopOurInstagram from './shopOurInstagram/ShopOurInstagram';
import Footer from './Footer/Footer';
import axios from 'axios';
import { Button, Dialog } from '@mui/material';
import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { handleHomePageLoad, storImagePath } from '../../../Utils/globalFunctions/GlobalFunction';
import PromoComponent1 from './PromoComponent/PromoComponent/PromoComponent1';
import PromoComponent2 from './PromoComponent/PromoComponent/PromoComponent2';
import BrandsComponent from './PromoComponent/BrandsComponent/BrandsComponent';
import OurCraftmanShip from './OurCraftManShip/OurCraftmanShip';
import GallerySlider from './Gallery/GaleryComponent';
import CompanyData from './ComapnayData/CompanyData';
import CountdownTimer from './CountDownTimer/CountDownTimer';
import AffiliationData from './PromoComponent/BrandsComponent/AffiliationData';
import SocialMedia from './Gallery/SocialMediaSlider';
import { useRecoilState, useRecoilValue } from 'recoil';
import { companyLogo, loginState } from '../../../../../Recoil/atom';
import { Helmet } from 'react-helmet';

export default function Home() {
  const islogin = useRecoilValue(loginState);
  const [companyTitleLogo, setCompanyTitleLogo] = useRecoilState(companyLogo)
  const [title, setTitle] = useState();
  const [favicon, setFavIcon] = useState();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      // const APIURL = 'http://zen/api/'; // local
      const APIURL = 'https://api.optigoapps.com/storev26/store.aspx';  // server 2
      // const APIURL = 'https://api.optigoapps.com/test/store.aspx'; // server 1


      const header = {
        Authorization: 'Bearer optigo_json_api',
        domain: (window.location.hostname === 'localhost' || window.location.hostname === 'zen') ? 'estore.orail.co.in' : window.location.hostname,
        // domain: 'estore.orail.co.in',
        version: 'Live',
        sp: "1"
        // domain: 'zen',
      };
      // const header = {
      //   Authorization: 'Bearer optigo_json_api',
      //   YearCode:'',
      //   version: '',
      //   domain: 'zen',
      //   // domain: 'zen',
      // };

      try {
        const body = {
          "con": "{\"id\":\"\",\"mode\":\"store_init\"}",
          "p": "",
          "f": "formname (init)",
        };
        const response = await axios.post(APIURL, body, { headers: header });
        if (response.status === 200) {
          localStorage.setItem('UploadLogicalPath', response.data.Data.rd[0].UploadLogicalPath);
          localStorage.setItem('storeInit', JSON.stringify(response.data.Data.rd[0]));
          localStorage.setItem('myAccountFlags', JSON.stringify(response.data.Data.rd1));
          localStorage.setItem('CompanyInfoData', JSON.stringify(response.data.Data.rd2[0]));
          let title = response?.data?.Data?.rd[0]?.companyname
          let favIcon = response?.data?.Data?.rd[0]?.favicon
          let companyLogo = response?.data?.Data?.rd[0]?.companylogo
          setTitle(title);
          setFavIcon(favIcon);
          setCompanyTitleLogo(companyLogo);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    console.log("favicon", favicon);

    const getMetalTypeData = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';
        const storedCustomerId = JSON.parse(localStorage.getItem('loginUserDetail'));

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        // {"FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${storedCustomerId?.id ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"METALTYPECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "Account (changePassword)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response?.Data?.rd) {
          let data = JSON.stringify(response?.Data?.rd)
          localStorage.setItem('MetalTypeData', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const getQualityColor = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"DIAQUALITYCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "header (getQualityColor)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response?.Data?.rd) {
          let data = JSON.stringify(response?.Data?.rd)
          localStorage.setItem('QualityColor', data)
        }

      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }


    const getColorStoneQualityData = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        // {"FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"CSQUALITYCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "indexPage (getColorStoneQualityData)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response?.Data?.rd) {
          let data = JSON.stringify(response?.Data?.rd)
          localStorage.setItem('ColorStoneQualityColor', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const getMetalColor = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"METALCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "index (getSizeData)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response?.Data?.rd) {
          let data = JSON.stringify(response?.Data?.rd)
          localStorage.setItem('MetalColorData', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const currencyCombo = async () => {

      try {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${loginUserDetail?.id}`
        });
        const encodedCombinedValue = btoa(combinedValue);

        let body = {
          "con": `{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "on-index(home)-call (CURRENCYCOMBO)",
          "p": encodedCombinedValue
        }

        await CommonAPI(body).then((res) => {
          if (res?.Data.rd) {
            localStorage.setItem("CURRENCYCOMBO", JSON.stringify(res?.Data.rd))
          }
          // console.log("res",res)
        })

      }
      catch (error) {
        console.log("error", error)
      }

    }


    const getColorImgData = async () => {

      try {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const combinedValue = JSON.stringify({
          autocode: "", FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${loginUserDetail?.id}`
        });
        const encodedCombinedValue = btoa(combinedValue);

        let body = {
          "con": `{\"id\":\"Store\",\"mode\":\"COLORIMAGELIST\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "mainIndex.js (getTheAllColorData)",
          "p": encodedCombinedValue
        }

        const response = await CommonAPI(body);
        if (response?.Data?.rd) {
          let data = JSON.stringify(response?.Data?.rd)
          localStorage.setItem('colorDataImages', data)
        }

      }
      catch (error) {
        console.log("error", error)
      }

    }

    fetchData();
    currencyCombo();
    getColorImgData();
    getMetalTypeData();
    getQualityColor();
    getColorStoneQualityData();
    getMetalColor();
    storImagePath();

  }, []);
  const [isLoginStatus, setIsloginStatus] = useState();
  useEffect(() => {
    if (islogin) {
      setIsloginStatus(islogin)
      window.scrollTo(0, 0);
    }
  }, [])

  console.log('islogin', islogin);
  //  let domainName =  `((window.location.hostname === 'localhost' || window.location.hostname === 'zen') ? 'astore.orail.co.in' : window.location.hostname)/ufcc/image/`

  // const [title, setTitle] = useState();
  // const [favicon, setFavIcon] = useState();
  // useEffect(() => {
  //   setTimeout(() => {
  //     const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
  //     if (storeInit) {
  //       setTitle(storeInit?.companyname)
  //       setFavIcon(storeInit?.favicon)
  //     }
  //   }, 100);
  // }, [islogin == 'true', islogin == 'false'])

  console.log();

  useEffect(() => {
    handleHomePageLoad();
  }, []);

  return (
    <div className='paddingTopMobileSet' style={{ backgroundColor: 'white', paddingTop: '0px' }}>
      <div className='homeMain'>
        <Helmet>
          <title>{title}</title>
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          <meta name="description" content={title} />
          <link rel="apple-touch-icon" href={favicon} />
          <link rel="manifest" href={favicon} />
        </Helmet>
        {islogin == 'true' ? (
          <>
            <Video />
            <Footer />
          </>
        ) :
          <>
            <Video />
            {/* <SmilingRock /> */}
            <PromoComponent1 />
            <BrandsComponent />
            <PromoComponent2 />
            <FestiveFinds />
            <OurCraftmanShip />
            <GallerySlider />
            <CompanyData />
            <AffiliationData />
            <SocialMedia />
            {/* <DaimondEveyone /> */}
            {/* <ShopByCategory /> */}
            {/* <SmilingBrides /> */}
            {/* <FeaturedCollection /> */}
            <div style={{ marginTop: '30px' }}>
              {/* <SustainAbility /> */}
            </div>
            {/* <ShopifySection /> */}
            {/* <ShopOurInstagram /> */}
            <Footer />
          </>
        }
      </div>
    </div>
  )
}
