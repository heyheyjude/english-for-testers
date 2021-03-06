import { makeStyles } from '@material-ui/core/styles';
import loader from '../assets/loader.gif';
import React from 'react';
import classNames from "classnames";

const Loader = (props) => {
    const { classes } = props;
    const innerClasses = useStyles();
    return (
        <div className={classNames(innerClasses.loaderContainer, classes?.loaderContainer)}>
            <img alt="Loader" src={loader} />
        </div>
    );
};

const useStyles = makeStyles({
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        '& img': {
            width: '3rem',
        },
    },
});

export default Loader;
