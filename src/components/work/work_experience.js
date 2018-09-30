import React, {Component} from 'react';
import { map } from 'lodash';


const WORK = [
  {
    company: 'Keyo',
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, purus nunc velit tempor commodo. Nec ipsum quis, felis hac malesuada lacus magna aptent, vestibulum tortor pellentesque, consectetuer erat, lacinia quis libero nunc dolor. Donec eu porttitor ante sit wisi, condimentum pulvinar, diam tristique, a aliquet ac ac ac odio viverra. Et vestibulum non sed. Egestas sed eu tincidunt vestibulum luctus, placerat tincidunt tincidunt interdum sed morbi, imperdiet magna sodales scelerisque, auctor interdum odio. Libero elit a arcu elit mattis. Sit nulla.\n' +
    '\n' +
    'Ligula aliquam. Vestibulum fusce id. Viverra laoreet. Vel diam feugiat urna in. Nonummy massa neque volutpat neque aliquet. Cum erat, magnis lectus rhoncus convallis sit, felis amet. Congue nam faucibus diam parturient eros sit, tempor aenean elit volutpat dui. Non pariatur blandit, nec ligula vestibulum fames placerat eros, ultrices sapien orci. Est sed leo nam, neque faucibus non tellus. Nunc duis tristique phasellus cras maecenas euismod, nulla nec dictumst lectus nulla dis mi.'
  },
  {
    company: 'Inflection',
    title: 'Fullstack Rails Engineer',
    description: 'Lorem ipsum dolor sit amet, purus nunc velit tempor commodo. Nec ipsum quis, felis hac malesuada lacus magna aptent, vestibulum tortor pellentesque, consectetuer erat, lacinia quis libero nunc dolor. Donec eu porttitor ante sit wisi, condimentum pulvinar, diam tristique, a aliquet ac ac ac odio viverra. Et vestibulum non sed. Egestas sed eu tincidunt vestibulum luctus, placerat tincidunt tincidunt interdum sed morbi, imperdiet magna sodales scelerisque, auctor interdum odio. Libero elit a arcu elit mattis. Sit nulla.\n' +
    '\n' +
    'Ligula aliquam. Vestibulum fusce id. Viverra laoreet. Vel diam feugiat urna in. Nonummy massa neque volutpat neque aliquet. Cum erat, magnis lectus rhoncus convallis sit, felis amet. Congue nam faucibus diam parturient eros sit, tempor aenean elit volutpat dui. Non pariatur blandit, nec ligula vestibulum fames placerat eros, ultrices sapien orci. Est sed leo nam, neque faucibus non tellus. Nunc duis tristique phasellus cras maecenas euismod, nulla nec dictumst lectus nulla dis mi.'
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
    </div>
  )
};