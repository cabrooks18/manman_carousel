import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
   
    {
      image: "https://lh3.googleusercontent.com/BL3JJFG9jP-QFUxNT-SahiBGSDdi-BX6KK0Mj21lEx-WA21oYR-85fWq0Yv8WsF8jdRf3jAthBB6gqVhBzoNEjn8aJR1E0cZIdlP2OKpJsRfGjvoDcJcYUu8JfCLGPd2ZQ_ZRPoqEXTTOrirwHmCIHfsdqB8SAfBfRJqiKHxzZDBIJVGl7WGrEvZR5pBp_psbygFBvziZNnxT-jobwdVqtYaXn_ZUIy7Y2SHouCRciJTPU23IcQGN4nKHxQeACRfE3iwtbGgWkn-0xij_8r3haREsWZHL1lV1XnfWr0v6scxIYKqr8lwnIHDS9c-9mK3FzuMo3Lx9qpVosSOaMEh5Blwu3wqmhJcHFb_eV4UkXVk9AP2_c0WpSlZS2aajRCVfCCRw1RlzipoW5RtqRHO4asUH2cDQFmxGlL4GmTW2zzOZOcbh9DeKBDgnzHUVmg4V9Aeq3hrqCCLFzK7H5N5GrDvIcTXRPAAUWhCoyC2-5eIw6gwqqCP3xwbAnDr_U3JX0zC8f_u0oEPB-9k0jXkDn79zkpqZ_9NcDF3L6np_ANqQjeuDRlCgaDE2kQszuXK0ieiftmj0HBlsNFnZC2id_CWRBXf5DlUtL_yz6fPaq5-WlT3fAXZ8i7TFZnEqI6yKD7MbMWRY-2xie_PCly1abjWfoxQTyBoMjNStVeiE3PAcf_a0s9Dr4oYJATuo2okiN38CSFNLm9zQNw8stDrH8OrJbeve6kOMj_XIflZrhgyt7CHTZJBKTxDb1EVHlAnjbiGm_nF7aUg2qeqqPOELvQF_ZBtgxnrYUNUh7EIWw3iqh7I0eosbo5e4ljsHgNoZPRJy3C6mEIwyhRhwVqIAAc2NlXM13ENtBZ7ujbX2cDwpYsBumvi1r7u6TzA7DbEGo_Omv4ieBwofqJpVr5sRotF6LBhjrtDQUur0yWHQejNb203=w800-h600-no?authuser=0https://photos.google.com/photo/AF1QipN_HY0Cg_Fff2VFu1A-RPJ1z2wTP5MCsBUrRHz-",
      caption: "Son"
    },
    {
      image: "https://lh3.googleusercontent.com/zO_MZZfmM65pG7JM5lh3Y8MoiGNNlVLg7-GsCp17MHgMPaIBUF6lAvnXPWL0iTERaLfPBO5OM1XninIR3ivLJK0czjR-LYLAkIotDCcoukJnPGU52naNmAIG_5nhbyRsUOO0AjG0eh15PE7i4xZM8UitaDYCDT6_GGsVHa9SuWR-ClceD2Kuw2Q3mZIcIgpmRPL5LzPU2z6fe9pKgQ8sI4pcB-4adzkfpLi2VL8nwJFgQQmM3AYhHLu6lvsV_sh7xVxMfu_5dW7Z-WxbzvjaUndvSE5Gnz6BePSdR8rnHh1mS9XjBWV9SSeQaU2oacKEYmz0CyQDoEfG7PTsM68D99xPoyVtdZyW1ht3YfduTTpR4B7mMImWtczMri2wt7f4kGtpZfw1nkIYWCSpOOiEJHVHnrnAg_wX-T-KoBiQ0BEkgYTlZKBwpxhfUAeBl3ol0Kqku3GmSRSQwtPbcdQ-PDqicFzwBHhR2KQ7hJMQtLEfV7mNvaLABPiWvXGSUxVEFBS7jpwYDBrbnFEX7aY7_NMX1Q2eZA1JI_iXn_ad3YM6BXCyCr06lZmtU0i3ac5Xv_24Vd3ahk-9X_v-2h4ZLfDgfwVqQXRHichN3nihvXBkQViaVWBP9EuBj51XEw70RiTbIvZQQKU032KqDtK3kqpDlUUADa1wXIVWWnpLrgP-rLuEg0YPhUCoBhninoi1zAJviJYe-QZmwAHHDanpZ8TsMOzRr-xFv-L9yJyKfTuxMdWip0YlPEp6loHohnEM2qIkb2kFwPEqfpU_A24J4MRWkfEAMr_F6Jj_UVpxUki4U4adDQB9f1JxOfXHUTzViT3wipQpn4Lh4bdXFkre5h3I5iPecBCsJ9lCjZ2pP1d2DTZ1QN1GDtyxwR-QDQKPy-T6CRRQeZqhHIFyOv8awJ9fy2QBSkyKDlId91JGiyWm8EUl=w636-h522-no?authuser=0https://photos.google.com/photo/AF1QipP7PRd4xH99nBgPabIpXAuL3PUF1gLbVWTUK9K9",
      caption: "Son & Fam "
    },
    {
      image: "hhttps://photos.google.com/photo/AF1QipNqEemhV2bC1u8Mngz108UW0M5EzFEMLhmnPAtL",
      caption: "Grands"
    },
    {
      image: "https://photos.google.com/photo/AF1QipOL6SC9eL9e_19E4oSV35Z9CvWGDbIUIBC279hX",
      caption: "Son & Fam2"
    },
    {
      image: "https://photos.google.com/photo/AF1QipOSMg0WYXjlZrBvwOekalSP9ToST1JgCvaegdOY",
      caption: "Boss Lady"
    },
    {
      image: "httphttps://photos.google.com/photo/AF1QipPgZQCzaKoFIl1fYlIsix5WCeLaN-_Rw2weh9qXs://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      caption: "Us"
    },
    {
      image: "https://photos.google.com/photo/AF1QipMZ633d8AWpTFMiScPVuIOJsIfUa2nZ_c32wB-l",
      caption: "Son2"
    },
    {
      image: "https://photos.google.com/photo/AF1QipOpYk56f1v-wyw51ovVFAWXT_FTN8FwRpef-n1L",
      caption: "Grandbaby"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="150px"
            height="150px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            //  thumbnailWidth="100px"
            //  style={{
            //    textAlign: "center",
            //    maxWidth: "850px",
            //    maxHeight: "500px",
            //    margin: "40px auto",
            // }}
          />
        </div>
      </div>
    </div>
  );
}

export default App; 