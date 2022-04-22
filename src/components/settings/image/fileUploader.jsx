import React, { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { setImageUrl } from "../../../redux/configSlice";

import { Button } from "@mui/material";

const loadFile = (image, dispatch, currentUrl, setCurrentUrl) => {
    if (currentUrl !== null) {
        window.URL.revokeObjectURL(currentUrl);
    }
    let newUrl = window.URL.createObjectURL(image);
    dispatch(setImageUrl(newUrl));
    setCurrentUrl(newUrl);
};

const FileUploader = () => {
    const dispatch = useDispatch();
    const [currentImageUrl, setCurrentImageUrl] = useState(null);

    const uploadInputRef = useRef(null);
    return (
        <>
            <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                onChange={({ target }) => loadFile(target.files[0], dispatch, currentImageUrl, setCurrentImageUrl)}
                hidden
            />
            <Button onClick={() => uploadInputRef.current && uploadInputRef.current.click()} variant="outlined">
                Upload image
            </Button>
        </>
    );
};

export default FileUploader;
