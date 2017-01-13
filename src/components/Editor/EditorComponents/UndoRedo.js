import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Redo from 'material-ui/svg-icons/content/redo';
import Undo from 'material-ui/svg-icons/content/undo';
import FlatButton from 'material-ui/FlatButton';
import {blue500, red500, greenA200, fullWhite} from 'material-ui/styles/colors';



const UndoRedo = () => (
  <div>

    <div>
      <FlatButton
        tooltip="UNDO"
        icon={<Undo />}
      />
      <FlatButton
        tooltip="REDO"
        icon={<Redo />}
      />
    </div>

  </div>
);

export default UndoRedo;

// const styles = {
//   mediumIcon: {
//     width: 60,
//     height: 60,
//   },
//   medium: {
//     width: 80,
//     height: 80,
//     padding: 15,
//   }
// };


    // <div>
    //   <IconButton tooltip="Undo"
    //     iconStyle={styles.mediumIcon}
    //     style={styles.medium}
    //   >
    //     <Undo className="muidocs-icon-content-undo" />
    //   </IconButton>
    // </div>

    // <div>
    //   <IconButton tooltip="Redo"
    //     iconStyle={styles.mediumIcon}
    //     style={styles.medium}
    //   >
    //     <Redo className="muidocs-icon-content-redo" />
    //   </IconButton>

    // </div>