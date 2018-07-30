import React, {Component} from 'react';
import { forEach } from 'lodash';


const WORK = [
  {
    company: 'Keyo',
    title: 'Software Engineer',
  },
  {
    company: 'Inflection',
    title: 'Fullstack Rails Engineer',
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
    console.log("WORK EXPERIENCE");
    return(
      <div className={'workExperienceContainer'}>
        {forEach(WORK, (info, idx)=> {
          return <WorkBlock info={info} key={idx}/>
        })}
      </div>
    )
  }
}

const WorkBlock = ({ info }) => {
  console.log("INFO IS", info);
  return(
    <div className={'workExperienceSection'}>
      <h2>{info.company} : {info.title}</h2>
    </div>
  )
};