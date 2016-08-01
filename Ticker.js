import React from 'react';
import {TransitionMotion, spring} from 'react-motion';

export default function Ticker({item}) {
  return (
    <TransitionMotion
      willEnter={() => ({
        opacity: 0,
        y: 15,
      })}
      willLeave={() => ({
        opacity: spring(0),
        y: spring(-15),
      })}
      styles={[{
        key: item.id,
        data: item,
        style: {
          opacity: spring(1),
          y: spring(0),
        },
      }]}>
      {(configs) =>
        <div className="container">
          {configs.map((config) =>
            <div className="item"
              key={config.key}
              style={{
                opacity: config.style.opacity,
                transform: `translateY(${config.style.y}px)`,
              }}>
              {config.data.text}
            </div>
          )}
        </div>
      }
    </TransitionMotion>
  );

}
