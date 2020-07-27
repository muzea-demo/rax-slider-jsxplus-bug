import { createElement, Fragment } from 'rax';
import View from 'rax-view';
import Slider from 'rax-slider';
import Image from 'rax-image';

const MyComponent = () => {
  return (
    <View>
      <View>
        <Slider className="slider" width="750" height="500" autoPlay>
          <Slider.Item x-if={false}>
            <Fragment>
              <Image
                source={{
                  height: '500rpx',
                  width: '750rpx',
                  uri:
                    '//gw.alicdn.com/tfs/TB19NbqKFXXXXXLXVXXXXXXXXXX-750-500.png',
                }}
              />
            </Fragment>
          </Slider.Item>
          <Slider.Item>
            <Image
              source={{
                height: '500rpx',
                width: '750rpx',
                uri:
                  '//gw.alicdn.com/tfs/TB1tWYBKFXXXXatXpXXXXXXXXXX-750-500.png',
              }}
            />
          </Slider.Item>
          <Slider.Item>
            <Image
              source={{
                height: '500rpx',
                width: '750rpx',
                uri:
                  '//gw.alicdn.com/tfs/TB1SX_vKFXXXXbyXFXXXXXXXXXX-750-500.png',
              }}
            />
          </Slider.Item>
        </Slider>
      </View>
    </View>
  );
};

export default MyComponent;
