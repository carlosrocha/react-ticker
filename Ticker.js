import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

export default function Ticker({item}) {
  return (
    <TransitionMotion
      willEnter={key => ({
        item,
        opacity: spring(0),
        y: spring(15),
      })}
      willLeave={(key, {item}) => ({
        item,
        leaving: true,
        opacity: spring(0),
        y: spring(-15),
      })}
      styles={{
        [item.id]: {
          item,
          opacity: spring(1),
          y: spring(0),
        },
      }}>
      {configs =>
        <div style={{
          position: 'relative',
          border: '1px solid #bbb',
          width: 300,
          padding: '20px 0',
          fontFamily: 'sans-serif',
          fontSize: 30,
          textAlign: 'center',
        }}>
          {Object.keys(configs).map(key =>
            <div key={key}
              style={{
                width: '100%',
                position: configs[key].leaving ? 'absolute' : 'static',
                opacity: configs[key].opacity,
                transform: `translateY(${configs[key].y}px)`,
              }}>
              {configs[key].item.text}
            </div>
          )}
        </div>
      }
    </TransitionMotion>
  );

}
