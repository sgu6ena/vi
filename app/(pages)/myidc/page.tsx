'use client';
import React, {useEffect} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import Cookies from "js-cookie";
import {LINKS} from "@/app/config/links";

const Page = () => {
    const params = useSearchParams()
    const {push} = useRouter()
    const token = params.get('token')

    if (token) {
        Cookies.set('at', token)
    }

    useEffect(() => {
        push(LINKS.START)
    }, [token]);

    return null;
};

export default Page;