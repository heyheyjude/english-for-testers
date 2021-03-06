import React, {useState, useCallback} from 'react';
import cx from "classnames";
import {makeStyles} from "@material-ui/core";
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const FullScreenButton = ({className}) => {
    const classes = useStyles();
    const [fullScreenEnabled, setFullScreenEnabled] = useState(false);

    const handleFullScreen = useCallback(() => {
        if (fullScreenEnabled) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
        setFullScreenEnabled(!fullScreenEnabled);
    }, [fullScreenEnabled]);

    return (
        <button
            className={cx(classes.fullScreenBtn, className)}
            onClick={handleFullScreen}
            type="button"
        >
            <FullscreenIcon className={classes.icon}/>
        </button>
    )
};
const useStyles = makeStyles({
    fullScreenBtn: {
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        listStyle: 'none',
        transition: 'all 0.5s ease-out',
        "&:active": {
            transform: 'scale(0.8)',
        },
    },
    icon: {
        color: '#ffffff',
        fontSize: '35px',
    },

});
export default FullScreenButton;
