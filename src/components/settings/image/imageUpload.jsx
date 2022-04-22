import React, { useRef, useState } from "react";

import { Button } from "@mui/material";

const ImageUpload = ({ onChange }) => {
    const [imgURL, setImgURL] = useState(null);

    const uploadInputRef = useRef(null);

    const openDialog = () => {
        uploadInputRef.current && uploadInputRef.current.click();
    };

    const fileUploaded = ({ target }) => {
        let newImage = target.files[0];
        let newUrl = URL.createObjectURL(newImage);
        if (imgURL !== null) {
            URL.revokeObjectURL(imgURL);
        }
        setImgURL(newUrl);
        onChange(newUrl);
    };

    return (
        <>
            <input ref={uploadInputRef} type="file" accept="image/*" onChange={fileUploaded} hidden />
            <Button onClick={openDialog} variant="outlined">
                Upload image
            </Button>
        </>
    );
};

export default ImageUpload;
