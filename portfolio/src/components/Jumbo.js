import React from 'react';
import './Jumbo.css'
import Github from './Github';
import Blog from './Blog';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

//const aboutMe = " 안녕하십니까 저는 김영조라고 합니다. ";

const Jumbo = () => {

    const images = [
        {
          url: '/static/images/grid-list/breakfast.jpg',
          title: 'Github',
          width: '50%',
        },
        {
          url: '/static/images/grid-list/burgers.jpg',
          title: 'Blog',
          width: '50%',
        }
      ];

      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: 400,
          width: '100%',
        },
        image: {
          position: 'relative',
          height: 100,
          [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
          },
          '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
              opacity: 0.15,
            },
            '& $imageMarked': {
              opacity: 0,
            },
            '& $imageTitle': {
              border: '4px solid currentColor',
            },
          },
        },
        focusVisible: {},
        imageButton: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.common.white,
        },
        imageSrc: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: theme.palette.common.black,
          opacity: 0.4,
          transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
          position: 'relative',
          padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
          height: 3,
          width: 18,
          backgroundColor: theme.palette.common.white,
          position: 'absolute',
          bottom: -2,
          left: 'calc(50% - 9px)',
          transition: theme.transitions.create('opacity'),
        },
      }));

      const classes = useStyles();

    return (
        <div className="jumbo">
            <div className="left-div">
                <div className="title-name">
                    Kim Young Jo
                </div>
                <div className="title-introduce"><h2>Front-End Developer</h2>
                   
                </div>
                <div className="title-picture">
                    <div className="picture">
                        
                    </div>
                </div>
            </div>

            <div className="right-div">
                <div className="title-stack">
                    TECH STACK
                </div>
                <div className="title-tech">
                    HTML  CSS  Javascript  React  Node.js  Java Python
                </div>
                <div className="title-dummy">
                    HTML
                </div>
                <div className="title-dummy2">
                    CSS
                </div>
                <div className="title-dummy3">
                    Javascript
                </div>
                <div className="title-dummy4">
                    React.js
                </div>
                <div className="title-dummy5">
                    Node.js
                </div>
                <div className="title-dummy6">
                    Java
                </div>
                <div className="title-dummy7">
                    Python
                </div>
                <div className="title-ability">
                </div>
                <div className="title-title">
                    Dev Activity
                </div>
                <div className="title-btn">
                <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbo;