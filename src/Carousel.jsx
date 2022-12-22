import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    // {
    //   image: <img scr = "c.\user\image000001.jpg",
    //   caption: "Salad"
    // },
    {
      image: "https://photos.google.com/photo/AF1QipN_HY0Cg_Fff2VFu1A-RPJ1z2wTP5MCsBUrRHz-",
      caption: "Son"
    },
    {
      image: "https://photos.google.com/photo/AF1QipP7PRd4xH99nBgPabIpXAuL3PUF1gLbVWTUK9K9",
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