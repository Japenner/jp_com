import React from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import NoteListing from './NoteListing';

const NotesPage = () => {
  const mockData = [
    {
      id: '1',
      datetime: 'Friday, April 7, 2023 2:54:43 PM GMT-04:00',
      title: 'tny',
      url: 'https://tny.m15o.net/about.php',
      description: "Tny is a little console. You know, these things with a screen and a controller where you play games? Right, so it's that, but very basic. In fact, it's so basic that the size of its screen is only 16 by 16 pixels, its controller only has arrow keys and two buttons and its game cartridge memory is 256 bytes maximum. Oh and it doesn't have any sound or color.",
      createdBy: 'jacob',
      tags: ['uxn', 'assembly', 'fantasy-console'],
    },
    {
      id: '2',
      datetime: 'Friday, April 6, 2023 2:54:43 PM GMT-04:00',
      title: 'tny',
      url: 'https://tny.m15o.net/about.php',
      description: "Tny is a little console. You know, these things with a screen and a controller where you play games? Right, so it's that, but very basic. In fact, it's so basic that the size of its screen is only 16 by 16 pixels, its controller only has arrow keys and two buttons and its game cartridge memory is 256 bytes maximum. Oh and it doesn't have any sound or color.",
      createdBy: 'jacob',
      tags: ['uxn', 'assembly', 'fantasy-console'],
    },
    {
      id: '22',
      datetime: 'Friday, April 6, 2023 2:54:43 PM GMT-04:00',
      title: 'tny',
      url: 'https://tny.m15o.net/about.php',
      description: "Tny is a little console. You know, these things with a screen and a controller where you play games? Right, so it's that, but very basic. In fact, it's so basic that the size of its screen is only 16 by 16 pixels, its controller only has arrow keys and two buttons and its game cartridge memory is 256 bytes maximum. Oh and it doesn't have any sound or color.",
      createdBy: 'jacob',
      tags: ['uxn', 'assembly', 'fantasy-console'],
    },
    {
      id: '3',
      datetime: 'Friday, April 5, 2023 2:54:43 PM GMT-04:00',
      title: 'tny',
      url: 'https://tny.m15o.net/about.php',
      description: "Tny is a little console. You know, these things with a screen and a controller where you play games? Right, so it's that, but very basic. In fact, it's so basic that the size of its screen is only 16 by 16 pixels, its controller only has arrow keys and two buttons and its game cartridge memory is 256 bytes maximum. Oh and it doesn't have any sound or color.",
      createdBy: 'jacob',
      tags: ['uxn', 'assembly', 'fantasy-console'],
    },
    {
      id: '4',
      datetime: 'Friday, February 7, 2023 2:54:43 PM GMT-04:00',
      title: 'tny',
      url: 'https://tny.m15o.net/about.php',
      description: "Tny is a little console. You know, these things with a screen and a controller where you play games? Right, so it's that, but very basic. In fact, it's so basic that the size of its screen is only 16 by 16 pixels, its controller only has arrow keys and two buttons and its game cartridge memory is 256 bytes maximum. Oh and it doesn't have any sound or color.",
      createdBy: 'jacob',
      tags: ['uxn', 'assembly', 'fantasy-console'],
    },
  ];

  return (
    <AnimatedPage>
      {mockData.map((item) => <NoteListing note={item} />)}
    </AnimatedPage>
  )
};

export default NotesPage;
