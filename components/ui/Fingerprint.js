import React, { useState, useEffect } from 'react';
import getBrowserFingerprint from 'get-browser-fingerprint';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import useUser from "/lib/useUser";

const Fingerprint = () => {

    const apiUrl = `/api/session`;
    const fingerprint = getBrowserFingerprint();  

    const { isLoading, error, data } = useQuery(
      [`${apiUrl}/${fingerprint}`],
      () => axios.post(apiUrl, {fingerprint: fingerprint})
    );

    return (
        <>            
        </>
    );
}

export default Fingerprint;