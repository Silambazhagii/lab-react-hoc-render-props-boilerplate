import './App.css';
import LikeImage from './components/General/LikeImage';
import LikePost from './components/General/LikePost';
import CommonHOC from './components/HOC/CommonHOC';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikepostHOC from './components/HOC/LikepostHOC';
import CommonProps from './components/Props/CommonProps';
import LikeImageprops from './components/Props/LikeImageprops';
import LikePostProps from './components/Props/LikePostprops';

function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h1>Blog Using HOC</h1>
      <div className='buttons'>
        <LikeImageHOC/>
        <LikepostHOC/>
      </div>
      <h1>Blog Using Props</h1>
      <div className='buttons'>
        <LikeImageprops/>
        <LikePostProps/>
      </div>
    </div>
  );
}

export default App;
