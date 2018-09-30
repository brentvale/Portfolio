import React, {Component} from 'react';
import { map } from 'lodash';

import ReactLogo from '../../images/reactLogo';
import NodeLogo from '../../images/nodeLogo';
import RoRLogo from '../../images/RoR';

const WORK = [
  {
    company: 'Keyo AI',
    title: 'Software Engineer',
    description: 'We\'re creating a more rewarding rental experience for the tenant and landlord.  Tenants can pay rent, make service requests and even boost their credit score through our iOS and android apps. Landlords can manage inventory and streamline their daily tasks while migrating from their ancient DOS systems.  Keyo is the new way to rent.  Join today!',
    technologies: [
      {
        key: 0,
        name: 'React-Native/ReactJS',
        logo: <ReactLogo height={20}/>,
      },
      {
        key: 1,
        name: 'Node.js/Express.js',
        logo: <NodeLogo />,
      },
    ]
  },
  {
    company: 'TimeLessLapse',
    title: '(Hobby Project)',
    description: 'Compile daily photos to create timelapses of life\'s unforgettable moments.  Applicable for the month of Movember, pregnancy tracking, and the hobby gardener.  The image stabilization algorithm detects sharp gradient changes to create pixel maps which are easily adjusted to stabilize subsequent images. Features multi-lingual options: English, Spanish, Klingon.',
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
    ]
  },
];

const HOBBY = [
  {
    projectName: 'TimeLessLapse',
  },
  {
    projectName: 'HearTapp',
  }
];

export default class WorkExperience extends Component{
  render(){
    return(
      <div className={'flexCentered'}>
        {map(WORK, (info, idx)=> {
          return <WorkBlock info={info} key={idx}/>
        })}
      </div>
    )
  }
}

const WorkBlock = ({ info }) => {
  return(
    <div className={'workExperienceSection'}>
      <h2 className={'flexCentered mediumPadding'}>{info.company} : {info.title}</h2>
      <p className={'flexCentered mediumPadding'}>{info.description}</p>
      { map(info.technologies, (tech) => {
        return <TechnologyBox key={tech.key} tech={tech}/>
      })}
    </div>
  )
};

const TechnologyBox = ({ tech }) => {

  return(
    <div style={{ height: 40, width: 40, display: 'inline-block'}}>
      <p>{tech.name}</p>
      {tech.logo}
    </div>
  )
}