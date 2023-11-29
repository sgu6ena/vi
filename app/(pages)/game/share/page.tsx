'use client';
import React from 'react';

//@ts-ignore
import {ShareSocial}  from 'react-share-social'

const TITLE = "Новогодний переполох с IDC"
const IMG_URL = '/img.png'



const Page = () => {
    return (
        <div>

          <ShareSocial
            url ={IMG_URL}
            socialTypes= {['facebook','ok','viber', 'telegram']}
            onSocialButtonClicked={ (data:any) => console.log(data)}
          />

        </div>
    );
};

export default Page;