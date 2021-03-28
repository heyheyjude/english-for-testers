import React, {useState, useCallback} from 'react';
import {makeStyles} from "@material-ui/core";
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const FullScreenButton = () => {
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
            className={classes.fullScreenBtn}
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
        // transition: 'all .5s ease',
        // '&:hover': {
        //     transform: 'scale(1.3)',
        // },
    },
    icon: {
        color: '#ffffff',
        fontSize: '35px',
    },

});
export default FullScreenButton;
