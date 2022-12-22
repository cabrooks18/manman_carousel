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
      image: "https://lh3.googleusercontent.com/boKGCINUKPNrEm0inNoRAgQkMWopiV-oKj9btOPmN5KEwG2fO80XG8GmZP7WPzbE8MIBOQ9b8MPkwNvgXn6IMSNOpc5BVug39Pl9RwjiiPmwH_2lpbC1xdECPlIaP6bUyNrt8Uq_K_S3VTi75vlKonYUe7ZhHwhy0AD4vi8WDz5ukqCm7k8BzCcwaf3NP-30wz15V-jcbnWmTShw7agevxzlyk30CQrpkAa9Xey5o2Z0WSGF-1myEk8bRT4QT6eEI507wuhe2BKM91ZLuAwnK7OZFpwCUN7FuyalkjQW6s7hK8-2kjL8beeM-KE75pslG0O42ZXGBEtWBYYbcJSCUnYV4IJvfA79X-BVNBRcq0AhbsOkbjIA5JMTCf1gpFezJunf60-HsBh8x42O8KL_0SyOpd7NjXa_h84NFSyrmLuVnUqq3bKi8aMvSbsHKVklnQv7TZnf-NMw2EuLzH7ugiPadpb4iVtR9uzcsdqNfiG4JOVwrJHpD4hFnZEKlaQGdIPRvEXAIzq_99zFp38jqzxdMu9P75Bmg2RGCiDo6ykv7AhLEDmOg60XA2bWArA4kgPK-P2b8wQjFoZmdCGQObSVlwuqNdhl-fFa6z9n8UeR1QA2k0lGDDg6n7Gy0tBCTtbVGQEA-DS-z6ke07jcSMwT6_m-LvWPkWJLzkW5Bd6uZMP0zkjWPgKhKTMMB1_T5Vqfqpkrd4Ywx1irRXOMXl_FuDV2qG7SZQlFcPxVK77j8Enz4sknYOdVUIaoS2LYRvNA9K3ZPVBrwJ9ZpBEJmAQtZ96ETwc4qltuLqrrIEsHLW-aOxMlXyK9GPaCUh9VwbrQ4WXYcV5YwuCPx4LgLwViyO50uLcj0Ch7Dr2_Y7g6KYEiDUmTz4E9ueK_aUpWv7LvD6R0UvNi2U8krxsuGpcE4NyFxis8wt388IGAOC5TQ6bR=w510-h642-no?authuser=0",
      caption: "Grands"
    },
    {
      image: "https://lh3.googleusercontent.com/nFzU9gzStny25PJf65Rol8yi_DUdfaB08gSoAmhYq7mlXkKULr36NjWehIr77rToiTWOnwzN7xHrEjsWgWtIEjRoyTmmuy-pZaY8MVfii0tZokwz63351OY6rWMtQEnwr3_oiZg4wQiXCrD63uQXI4lW-gr-qMfxgUGiLCzDKd7_e5uhQCryIecWLgEIAusZ1fXtTOtLFpG3XdxMNNqlOB3swVcZJWNENL1GjDrwZZRSsx-nCJmMvFgdXs71oV7khRvUD2YtQG-V1HnERIOkYA2lxITPNj5IGHkp1vlkUzPgArX_HJzt9MtPkjkhjQkApNQg-6dF-oEsWt0Mh3Zn5tEZBqF1GpvGzChmsofCX9XisCuMluymcFji6MnJhN8e8JknrubGfr6AMCOGWFFE06QQnPKAit7-2xmTsQvfmn-LCpckUbQydTUhG40kHhQRyGQv_fz-bIhMVQGOIWtJKH4mATSXI4y-zBKO969XWM6BXnFPo2m3nOLM2Lxg71-fV_6gLJ8FceamwaIQ_QxFKIFLn9SWxHM-rX14gAryTAxBM6vaCATWThn2FMBojWLtE1EDf1VC_3KEHStqkiR-Tx1Q4wl10IE1zasdNhgVJbxCWjVb86TAFbIN1AmDJ45XMS34r6GTtdjSTwmPgmLPorUlkkCPgJipatggLTP11AJzctetN_mvyNeQF-E3mw_1CZpzQ-cv9yLG7HXAQrNZu1O_FVJK48AobAa6o_UJb3KQMiPztWZIQLpINEJIuHSR0h4Oh6fKZySlcYWG4NeasTt1daGnYcRo72L985oQFTFHdaseBYQLVuZxkWFTC9rLobZgAxUdxtEJZAF87WjsazX56FAs26t01t4rPth1yk8oJ6eYJv6AIxrVZArftAzQ-pSga4SOVie5jsea2GeayBQF_uwYvBvEJj6NxFGrF-Xgu-gg=w803-h1110-no?authuser=0",
      caption: "Son & Fam2"
    },
    {
      image: "https://lh3.googleusercontent.com/ZPLhXMZzr18KmH5NI0nBBTDL3E_KQJd5043xt9Mo_rp8RL_pTvTLtPJeeTTpVZ-ZmpK0uCbdD9pUZFEFIHlTyn3jJTdXazGUv7XBYP_3uUAox2u2QUm12Cmf-JeB7z0ytl3EMNwXUEiZ8j9gg41rEg_Ra1gP89B9XEjN8dGvJXtmp4zMWZvCWQX0HIqTxt3MpTXiMvYVh8I0JzOCQ_CI5AX24Nu8imIBcRprf7SZTbfzwUqrQTZWSjRrd2b7SHUgcm-ojygK_IRdYJJ2UE9S1GMEnwvN2id3Mt1cLmxeyAhbGaM123ye5jFP8K379bMVN6_TOU3pDZCW8dcNFFvEvgtlyLZtwLd1GIqDjT3oaM4wUFxewEWN-kAK_L8NRpVVa2bCHRFVqIgAZwL6OJpH_S_5ZE3-BHzcxFOH_FgPZPYhMLt2vKanLlwxnST75bckK5AZHtTk6ehdEZgyE5WHmWWkb93Mm6SzeAhLlJA4cI4WvmMrHgNEfg75URJ_hlw_SKsvnStk5hCPXJr_lnLQxGeO59ZsMAZcfpJfIZ9twf6PYs9mzxo_Wqi3m_47JCM3suVQ7O9pt5BS_VU0rKk7pczHbarDxFomZFxovGBWLu1A-dfAr7SbkCnINAn-kdvtBc8AGWX7dhlULI9pxn-Wr1S6fwcjJd3eYLTTAC1pllhAdHwSE5Gg1RZDC6ORw1NN3klUcyrk1Nxu9_RQsYXsN9q45MXUTftq1ALVCUVpBN8xWGYWuwhcEYqCnjAN07m_i9xs0X17gfm3rYUjz9KSirN35p1cZ8pMJ7uhKwXfupPNE6I1EvqACgsc7t1hytgUsw9OXPnVLV1RIAlPQJwZWzXiFdaagZHtP2x06vCeaEH-r5AwmICuYmiQGWcpjx_hpCryyEaQRjvIFVtLefXVKEfas4PQ8MIqTs5-46Qy5Lz0nsZt=w800-h600-no?authuser=0",
      caption: "Boss Lady"
    },
    {
      image: "https://lh3.googleusercontent.com/N54y9so9lAhAkwRXa32NK6zotHMbV4kFZznvZ0mmzrCYMe4bg8QwXHlskcuLWVyrQrQTAA_Zio60jpP2YVIcn42TaAEzmcxTiz5a7WOPI4q9YrK3xQhedZvwmp79ucqKrzIUh-qRk6PLTrrwY2zJaqvJhnzDPGKwoPZz0r-sYccYFotKYrOh8FBP28FdfMH2Kc_62Aq2Vp5eIAnGoXK8JIcE9DL5zMx47YmfRREZbcyC8xvm-xnrzeHDGsW-znjG5nA39IQVQEdNX3HJOzSat3jhbuDaE6r3BfhGM5zl8hraR5W_D6Or_Kfjs73Py6qIF4g_Zx7sSb2JJBm5zjfB72St6OyzADew2CSdPkPPWdwuDVhvqRqWHdQFVPq5nFXv7zt7UuczR7caGuwh79oeWgJROcBhgjavj3VXgykiuaZuY9iwjrV_sDHVSCvkDJ6VBR_g52CqIalw4gdAqcbdl6oHwZwqD-zIoHMNBI9CbUWPVmD0hBQe5Ewg_Iq0OjbzGoO6iqjsd1LCE_YEryjXmXAVooXgh_MW-aJ05nC5X0XqtKjrAIlOdh2hbAQ_yUTXd9_PGuZY2zCklSZOzpPH8iePdLbr5iOpaCeSAfUUyEoxAMDxtM9F-77HE0c8V5O4awQUUxuu7eFjDwOtAMMYp6UukxO0gRNEwDJtgP6dOEqyzz6_p-NxkHBHxe1GHyE9J-W-pzYHyzUge_1YfKuffBZbMzwN1xiQ2TEhuB0YKC_VvxuNOdAFwN25toT2kUJFQzUA84YrlCW7G7XPqFDuh3Tjz3FCpilxF75zumEq1vPMO8QVe-JpMR-nn1TPWYBYiWobftVmATb5qR9d9FYCaeVoqiugXiQVsxBTEAPysI9ubcAWpPsmdTqSX-apsLGPhT_5oiplh3pV0h7mjwOAgr8aasYd1Fu9PzLrTSBw7D167RUH=w684-h1082-no?authuser=0",
      caption: "Us"
    },
    {
      image: "https://lh3.googleusercontent.com/YODCJsX6H6AWhe2k8_izFvZehuBd2PkfhXGh6e4kHzDxYO15DH0BjSAv4XoTCuSyfD51m8CXdVVNBqcXEH2XVulFIfIYHO-LrsYvKHAQ2mbTw78n8skFgFVDwRfkxQ5Y7G9Pu7VcS-XgBsNpnNYv8o9hJpIFD0642ULCYvKyoSyGLsuWdA1_iIfyNPG3GCohKfr2yaBJ8-S5e_S698jXRZ3SienbV1gjXNxrVxJbL8V_Z5qfjb_4h9dOHjXo5XHOK5ipUQvkmGVrVchQXF_RqUiaQp3zuImyClqpOv7pinOiqz-BNhgM52OaJUGH9UR9tXaKNDh6uQYi8N0sOXYFcItGjL-5C-NAg8xzNASx_cNv-4tfWi77Kqqldjy0NxTQPZNq4R58uVVsO5GcCYB2LlQZw5ZjokijOIlGGYNvGgrAUaCe3Kjmgo5-Ucmphwb14uFO_kldbVxEPLZIQqFwSQAWl-HNWKFBrPRPpPzqBz_NMmPlhvTvRXOqbtuL1gFv-5a_rHzmMpc2NajgUCAFHxa6WlLT8YR9_LPfo3jZcwZRlZyHeZu2c-hCGnM6SdRnEWQFsj1aOCjDLdEKkik8rYflbDE6mWxlMHbaMuzg_i-gsJeASA3YMwoohgz5KtIM2lOYH92ADpqgcS1-DOmqu1lIfxTFexi8ZQOB5zKoS-3ynMP2JRV-WWJk-qyk2maajtXgmRf5sFFetGCx7JT9kp17bI66ID2HjzRmRxu2LS-NZNv6wXsbSooM5JE_ugMNLCOY9pFEl_fUPGj1CEwdpcasft5pelUdNNY4nessER4Z76H-XuI6HsIBmTaCAtnNNZN_MPGAU1F7SAGM5hXy0f0IRmHz1wWrlpYDL8jgHTV2x8jbzPo86TA_9DevttUK_0iJ3PzscRhOA7IqpF6JlJ-y-Yd8_sNI6zEYPUeSFv0BbpPL=w632-h1140-no?authuser=0",
      caption: "Son2"
    },
    {
      image: "https://lh3.googleusercontent.com/ZSu7ZFNjgeNA7oUnDlOulGI0MsebTdza5Y-NWbGuzWmsMXyTl2zsoDOjJTeXuNb1KLYGXGcBsg6wJj2SvRr7-ItojBqwFOMLisrUWUKmcJA8yzdLoEJIPrF9KEmjJy4N-AdDn8vC2tdJt8Eq6LaCWUDxx1RIwsn66EqKKtyaoNhMOl3D7dmCsNEBhalkNmjj5PfVOtv4BEDBHbhOR_FYS2h04hFI0vXWDMAMtruk6VTwSdxzgNS8VDqBHEEu1owpKcFJPoe2k2VF14ZAhttps://lh3.googleusercontent.com/N54y9so9lAhAkwRXa32NK6zotHMbV4kFZznvZ0mmzrCYMe4bg8QwXHlskcuLWVyrQrQTAA_Zio60jpP2YVIcn42TaAEzmcxTiz5a7WOPI4q9YrK3xQhedZvwmp79ucqKrzIUh-qRk6PLTrrwY2zJaqvJhnzDPGKwoPZz0r-sYccYFotKYrOh8FBP28FdfMH2Kc_62Aq2Vp5eIAnGoXK8JIcE9DL5zMx47YmfRREZbcyC8xvm-xnrzeHDGsW-znjG5nA39IQVQEdNX3HJOzSat3jhbuDaE6r3BfhGM5zl8hraR5W_D6Or_Kfjs73Py6qIF4g_Zx7sSb2JJBm5zjfB72St6OyzADew2CSdPkPPWdwuDVhvqRqWHdQFVPq5nFXv7zt7UuczR7caGuwh79oeWgJROcBhgjavj3VXgykiuaZuY9iwjrV_sDHVSCvkDJ6VBR_g52CqIalw4gdAqcbdl6oHwZwqD-zIoHMNBI9CbUWPVmD0hBQe5Ewg_Iq0OjbzGoO6iqjsd1LCE_YEryjXmXAVooXgh_MW-aJ05nC5X0XqtKjrAIlOdh2hbAQ_yUTXd9_PGuZY2zCklSZOzpPH8iePdLbr5iOpaCeSAfUUyEoxAMDxtM9F-77HE0c8V5O4awQUUxuu7eFjDwOtAMMYp6UukxO0gRNEwDJtgP6dOEqyzz6_p-NxkHBHxe1GHyE9J-W-pzYHyzUge_1YfKuffBZbMzwN1xiQ2TEhuB0YKC_VvxuNOdAFwN25toT2kUJFQzUA84YrlCW7G7XPqFDuh3Tjz3FCpilxF75zumEq1vPMO8QVe-JpMR-nn1TPWYBYiWobftVmATb5qR9d9FYCaeVoqiugXiQVsxBTEAPysI9ubcAWpPsmdTqSX-apsLGPhT_5oiplh3pV0h7mjwOAgr8aasYd1Fu9PzLrTSBw7D167RUH=w684-h1082-no?authuser=0kDCxvaYJ4Ix55ujHtF53IUrBzIifuQpI861Ln1Jj0PZXxSiuWOhAsVtcusYVkDhVUe7R9GELFuRGZIc6O_GxOQ2h11YFg83UMFh7_rRVk2nga6r_8xNcKMT7g6SxTX9aR30PHE56xZTRV1Aq50-6GV4MsNBrOB7LJjqhd8MB876ly8lzwhuenohNOcZ4qR3_rABvIZgunzFe0rbTTXN_yls_OuvhVNgzKIH2tOZbz9FbDRY0Mk8fZWxHTaLu2L3gOIH98p18mdb7mjJy32YaErbWcizCN70BipIBgXGxtf8dHtXbh7aL7kENYN5PwrqSNTapueDdMPnS9JwXeI6WJNmc8V3iFzPaORABquetovxGhKuqX4stmAc5zuazydNw9ryjHtIRsOD0IKfuxyZaZm2148-MSX7H4FhQ7ivlkL9nTePnf4EgkH-HwVl2941Zhy-0X5PDEylTUwe5CslmLxj2w8CQ3fN2Dwif5_9alT1kvqdn2SIe-SBy-_5eWlyrzWHkevEWeRteY0x1bmV8N3ZyF6zYp4h_56lnBoMBxV2zs1I41UneENYnyTDg5RjyCOxLCL1_U9ASq9UPEZ4d9tmOUqHmh38aivU4Wkfq5lD4uFZMD0fYNeMExFcFOGap-bTxRtYF4YG7k7MmmuoI-NsvL2SlZmzR=w270-h35https://lh3.googleusercontent.com/ZSu7ZFNjgeNA7oUnDlOulGI0MsebTdza5Y-NWbGuzWmsMXyTl2zsoDOjJTeXuNb1KLYGXGcBsg6wJj2SvRr7-ItojBqwFOMLisrUWUKmcJA8yzdLoEJIPrF9KEmjJy4N-AdDn8vC2tdJt8Eq6LaCWUDxx1RIwsn66EqKKtyaoNhMOl3D7dmCsNEBhalkNmjj5PfVOtv4BEDBHbhOR_FYS2h04hFI0vXWDMAMtruk6VTwSdxzgNS8VDqBHEEu1owpKcFJPoe2k2VF14ZAkDCxvaYJ4Ix55ujHtF53IUrBzIifuQpI861Ln1Jj0PZXxSiuWOhAsVtcusYVkDhVUe7R9GELFuRGZIc6O_GxOQ2h11YFg83UMFh7_rRVk2nga6r_8xNcKMT7g6SxTX9aR30PHE56xZTRV1Aq50-6GV4MsNBrOB7LJjqhd8MB876ly8lzwhuenohNOcZ4qR3_rABvIZgunzFe0rbTTXN_yls_OuvhVNgzKIH2tOZbz9FbDRY0Mk8fZWxHTaLu2L3gOIH98p18mdb7mjJy32YaErbWcizCN70BipIBgXGxtf8dHtXbh7aL7kENYN5PwrqSNTapueDdMPnS9JwXeI6WJNmc8V3iFzPaORABquetovxGhKuqX4stmAc5zuazydNw9ryjHtIRsOD0IKfuxyZaZm2148-MSX7H4FhQ7ivlkL9nTePnf4EgkH-HwVl2941Zhy-0X5PDEylTUwe5CslmLxj2w8CQ3fN2Dwif5_9alT1kvqdn2SIe-SBy-_5eWlyrzWHkevEWeRteY0x1bmV8N3ZyF6zYp4h_56lnBoMBxV2zs1I41UneENYnyTDg5RjyCOxLCL1_U9ASq9UPEZ4d9tmOUqHmh38aivU4Wkfq5lD4uFZMD0fYNeMExFcFOGap-bTxRtYF4YG7k7MmmuoI-NsvL2SlZmzR=w270-h359-no?authuser=09-no?authuser=0",
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