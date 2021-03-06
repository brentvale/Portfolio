import React, { Component } from 'react';
import { map } from 'lodash';

import HorseRide from '../horse/horse_ride';
import ReactLogo from '../../images/reactLogo.jsx';
import NodeLogo from '../../images/nodeLogo.jsx';
import RoRLogo from '../../images/RoR.jsx';

const WORK = [
  {
    company: 'Keyo AI',
    title: 'Software Engineer',
    website: {
      url: 'https://keyo.com',
      title: 'Keyo Main Website',
    },
    description: 'We\'re creating a more rewarding rental experience for the tenant and landlord.  Tenants can pay rent, make service requests and even boost their credit score through our iOS and android apps. Landlords can manage inventory and streamline their daily tasks while migrating from their ancient DOS systems.  Keyo is the new way to rent.  Join today!',
    technologies: [
      {
        key: 0,
        name: 'React-Native',
        logo: <ReactLogo height={20}/>,
      },
      {
        key: 1,
        name: 'Node.js/Express.js',
        logo: <NodeLogo />,
      },
    ],
  },
  {
    company: 'TimeLessLapse',
    title: '',
    website: {
      url: 'http://www.timelesslapse.com',
      title: 'Timelesslapse Hobby Site',
    },
    description: 'If I didn\'t code for work, I\'d still do it as a hobby. Timelesslapse is my favorite hobby project. Compile daily photos to create timelapses of life\'s unforgettable moments.  Applicable for the month of Movember, pregnancy tracking, and the hobby gardener.  The image stabilization algorithm detects sharp gradient changes to create pixel maps which are easily adjusted to stabilize subsequent images. Features multi-lingual options: English, Spanish, Klingon.',
    technologies: [
      {
        key: 2,
        name: 'ReactJS',
        logo: <ReactLogo height={20}/>,
      },
      {
        key: 3,
        name: 'RoR',
        logo: <RoRLogo />,
      },
    ],
  },
];

const DEFAULT_VIDEO_HEIGHT = 315;
const DEFAULT_VIDEO_WIDTH = 560;
const REDUCTION_PERCENT = 0.60; // 60%
const VIDEO_WIDTH_NARROW_SCREEN = DEFAULT_VIDEO_WIDTH * REDUCTION_PERCENT;
const VIDEO_HEIGHT_NARROW_SCREEN = DEFAULT_VIDEO_HEIGHT * REDUCTION_PERCENT;

const DELAY_UNTIL_VIDEO_LOAD = 4000; // second until trying to load youtube videos
const YOU_TUBE_VIDEOS = [
  {
    url: 'https://www.youtube.com/embed/j5sYjttLjL4',
    title: 'Vail Shred Crew',
    comments: 'I love to snowboard.  As my skills have progressed my desire to capture the mountain has grown too.  Here\'s my favorite snowboarding videos set to Incubus\' \'Aqueous Transmission\'.',
  },
  {
    url: 'https://www.youtube.com/embed/A8JJpMvIC1k',
    title: 'Boogey Boarding : Honeymoon',
    comments: 'I married a lady that loves to have as much fun as I do.  For our honeymoon we went to Maui, Hawaii and enjoyed a beautiful day boogey boarding on the small but exciting waves of Makena Beach.',
  },
  {
    url: 'https://www.youtube.com/embed/hfenhcmegF8',
    title: 'Building a Pergola',
    comments: 'I\'ve always been an engineer, I haven\'t always known how to code.  Construction projects are another passion of mine whether remodeling a bathroom, building a run-in-shed, or a Pergola for our wedding.',
  },
  {
    url: 'https://www.youtube.com/embed/CQnfdlkGZ30',
    title: 'Keyo Ski Video',
    comments: 'A company that skis together succeeds together!! We had a blast at Northstar-at-Tahoe in Truckee, CA in December of 2017. Here\'s our trip set to Houndmouth\'s \'Sedona\'.',
  },
  {
    url: 'https://www.youtube.com/embed/PLlrmsRwxEI',
    title: 'Brent and Brutus',
    comments: 'Yep.  I was a cowboy, and still do some cowboy-ing around on the weekends.  When I worked on an 88,000 acre ranch in Colorado Springs, CO, I had two trusty horses in my string.  This was my last ride with \'Brutus\', a great friend and a heck of a horse.',
  },
  {
    url: 'https://www.youtube.com/embed/-oWFcyOQed4',
    title: 'Building a chicken coop',
    comments: 'With 17 laying hens and a miniature rooster named Napolean, it can be hard to keep the wildlife away.  I used leftover barn wood to build our hardworking ladies a place to lay eggs and sleep at night protected from the elements and predators.',
  },
];

export default class WorkExperience extends Component {
  constructor() {
    super();
    this.state = {
      okToLoadYouTubeVideos: false,
    };
  }

  componentDidMount() {
    this.loadVideosTimeout = setTimeout(() => {
      this.setState({ okToLoadYouTubeVideos: true }, () => {
        this.forceUpdate();
      });
    }, DELAY_UNTIL_VIDEO_LOAD);
  }

  componentWillUnmount() {
    if (this.loadVideosTimeout) {
      clearTimeout(this.loadVideosTimeout);
    }
  }

  render() {
    const videoWidth = this.props.windowWidth < DEFAULT_VIDEO_WIDTH + 20
      ? VIDEO_WIDTH_NARROW_SCREEN : DEFAULT_VIDEO_WIDTH;
    const videoHeight = this.props.windowWidth < DEFAULT_VIDEO_WIDTH + 20
      ? VIDEO_HEIGHT_NARROW_SCREEN : DEFAULT_VIDEO_HEIGHT;

    return (
      <div className={'flexCentered'}>
        <div id={'workTitle'}>
          <h2
            style={{
              ...sectionTitleText,
              textAlign: 'left',
              paddingLeft: '20px',
              paddingRight: '80px',
            }}
          >
            {'When I\'m not engineering for fun at home... \n'}
          </h2>
          <h2
            style={{
              ...sectionTitleText,
              textAlign: 'right',
              paddingRight: '80px',
            }}
          >
            {'I\'m engineering for fun at work!'}
          </h2>
        </div>
        {map(WORK, (info, idx) => <WorkBlock info={info} key={idx}/>)}
        <WorkBlockLookingForMore />
        <SectionDivider />

        {this.state.okToLoadYouTubeVideos
          ? <div>
              <VideoSectionHeading />
              {map(YOU_TUBE_VIDEOS, (videoObj, idx) => <VideoSection
                        key={idx}
                        videoObj={videoObj}
                        height={videoHeight}
                        width={videoWidth}/>)}
            </div>
          : <div>
              <VideoSectionHeading />
              <h1>LOADING VIDEOS FROM YOUTUBE</h1>
            </div>}
        <div style={{ height: '50px', width: '100%' }} />
        <HorseRide windowWidth={this.props.windowWidth}/>
      </div>
    );
  }
}

const VideoSectionHeading = () => (
  <div className={'workExperienceSection'}>
    <h2 style={sectionTitleText}>
      {'Feeling Groovy Making Movies'}
    </h2>
    <p className={'mediumPadding sectionFont'} style={{ textAlign: 'left' }}>
      Film and photography are my Jam!  I love making movies, capturing timelapses, taking photos (with portrait mode on iOS!).  Here's some of my favorite videos, head over to my instagram (<a href={'https://www.instagram.com/coding_cowboy/'} target={'_blank'} rel={'noopener noreferrer'}>@coding_cowboy</a>) for best pictures and timelapses, hope you enjoy!
    </p>
  </div>
);

const SectionDivider = () => (
  <div style={sectionEndStyle}>
    <div style={{ height: 1, backgroundColor: '#e2e2e2' }}/>
  </div>
);

export const SectionTitle = ({ title }) => (
  <h2
    className={'flexCentered mediumPadding'}
    style={sectionTitleText}
  >
    {title}
  </h2>
);

const TechnologyBox = ({ tech }) => (
    <div style={technologyContainer}>
      <p style={labelText}>{tech.name}</p>
      <div style={logoContainer}>
        {tech.logo}
      </div>
    </div>
);

const VideoSection = ({ height, width, videoObj }) => {
  return(
    <div className={'workExperienceSection'}
         style={{ marginBottom: '20px' }}>
      <h3
        style={{
          ...sectionTitleText,
          marginBottom: 0,
        }}
      >
        {videoObj.title}
      </h3>
      <p className={'mediumPadding sectionFont'}
         style={{ textAlign: 'left' }}
      >
        {videoObj.comments}
      </p>
      <iframe
        title={videoObj.title}
        width={width}
        height={height}
        src={videoObj.url}
        frameBorder="0"
        allowFullScreen />
    </div>
  )
};

const WebsiteDisplay = ({ website }) => (
  <div style={websiteContainer}>
    <a href={website.url} title={website.title} style={websiteText}>{website.url}</a>
  </div>
);

const WorkBlock = ({ info }) => {
  const titleDisplay = info.title ? `${info.company} : ${info.title}` : `${info.company}`;
  return (
    <div className={'workExperienceSection'}>
      <SectionTitle title={titleDisplay}/>

      <p className={'mediumPadding sectionFont'} style={{ textAlign: 'left' }}>{info.description}</p>

      <WebsiteDisplay website={info.website} />

      <div className={'mediumPadding'}>
        { map(info.technologies, tech => <TechnologyBox key={tech.key} tech={tech}/>)}
      </div>
    </div>
  );
};

const WorkBlockLookingForMore = () => (
  <div className={'workExperienceSection'}>
    <SectionTitle title={'Looking for more ??'}/>

    <p className={'mediumPadding sectionFont'} style={{ textAlign: 'left' }}>
      {'Head on over to my '}
      <a href={'https://www.linkedin.com/in/brentvale/'}>linkedin profile</a>
      {' for more work history.  If any of my experiences could be useful to you, don\'t hesitate to reach out!'}
    </p>
  </div>
);

const labelText = {
  textAlign: 'center',
  fontFamily: 'Raleway',
  color: '#A9A9A9',
  fontSize: 10,
};

const logoContainer = {
  height: 58,
  width: 58,
  display: 'inline-block',
  textAlign: 'center',
};

const sectionEndStyle = {
  maxWidth: 800,
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 50,
  marginBottom: 50,
  paddingLeft: '10%',
  paddingRight: '10%',
};

const sectionTitleText = {
  color: '#3a3a3a',
  fontFamily: 'Raleway',
  fontSize: 20,
  textAlign: 'center',
};

const technologyContainer = {
  height: 80,
  width: 80,
  display: 'inline-block',
  textAlign: 'center',
};

const websiteContainer = {
  height: 60,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const websiteText = {
  textAlign: 'center',
  fontFamily: 'Raleway',
  fontSize: 16,
  paddingRight: 40,
};
