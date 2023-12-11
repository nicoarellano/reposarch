const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/dbafc811-fdf8-4337-99d8-2f2e84049b3e/style.json?key=57GQdjBIwQlt5qCvHYmh',
    center: [-75.7, 45.3],
    zoom: 9.3
});

map.on('load', () => {
    // Location pin
    map.loadImage(
        'bird_icon.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
           
            map.addSource('place', {
                'type': 'geojson',
                'data': 
                {
                    "type": "FeatureCollection",
                    "features": [
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [	-75.968579	,	45.22999	]

     },
     "properties": {
        "Species":"	Golden-crowned Kinglet	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Dead	",
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [	-75.92369	,	45.24574	]
     },
     "properties": {
        "Species":"	Rock Pigeon	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Dead	",
     }
   },
   {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.93354	,	45.27811	]
    },
    "properties": {
        "Species":"	American Robin	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Dead	",
    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.85431	,	45.29318	]
    },
    "properties": {
        "Species":"	Blue-headed Vireo	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Dead	",
    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.82999	,	45.32023	]
    },
    "properties": {
        "Species":"	Golden-crowned Kinglet	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.91431	,	45.32702	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Alive	",
    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.72730521	,	45.33252695	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",
    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70195673	,	45.33509236	]
    },
    "properties": {
        "Species":"	Song Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",
    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.7017504	,	45.33511839	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.7017953	,	45.33515201	]
    },
    "properties": {
        "Species":"	Song Sparrow	", 
        "Time":"	2023-10-05T15:02:41	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70329925	,	45.33546883	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90573946	,	45.33558786	]
    },
    "properties": {
        "Species":"	Golden-crowned Kinglet	", 
        "Time":"	2023-11-15T05:35:46	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90604948	,	45.33565851	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-15T05:38:54	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.90615747	,	45.33601402	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.7020859	,	45.33643411	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-10-05T14:50:40	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.90378776	,	45.33780393	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90378776	,	45.33780393	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90464889	,	45.34153846	]
    },
    "properties": {
        "Species":"	Brown Creeper	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.90368756	,	45.34214058	]
    },
    "properties": {
        "Species":"	Warbler sp.	", 
        "Time":"	2023-11-16T09:54:20	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.92122939	,	45.3440431	]
    },
    "properties": {
        "Species":"	Warbler sp.	", 
        "Time":"	2023-11-16T10:21:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.92116072	,	45.34405064	]
    },
    "properties": {
        "Species":"	Thrush sp.	", 
        "Time":"	2023-11-16T10:19:15	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.91052757	,	45.3451154	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-15T05:46:03	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90999878	,	45.34531485	]
    },
    "properties": {
        "Species":"	Sparrow sp.	", 
        "Time":"	2023-11-16T10:04:28	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.9169402	,	45.34691253	]
    },
    "properties": {
        "Species":"	Downy Woodpecker	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.91032939	,	45.34704511	]
    },
    "properties": {
        "Species":"	White-crowned Sparrow	", 
        "Time":"	2023-11-16T09:35:23	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.91661834	,	45.34716136	]
    },
    "properties": {
        "Species":"	Tennessee Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.91661834	,	45.34716136	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90889835	,	45.34716394	]
    },
    "properties": {
        "Species":"	Kinglet sp.	", 
        "Time":"	2023-11-16T10:09:28	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90895544	,	45.34727429	]
    },
    "properties": {
        "Species":"	Kinglet sp.	", 
        "Time":"	2023-11-16T10:07:50	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90902681	,	45.34735955	]
    },
    "properties": {
        "Species":"	Kinglet sp.	", 
        "Time":"	2023-11-16T10:06:29	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90905016	,	45.34740348	]

    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90905016	,	45.34740348	]

    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90905016	,	45.34740348	]
    },
    "properties": {
        "Species":"	Yellow-rumped Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90905016	,	45.34740348	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90905016	,	45.34740348	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90954	,	45.34743	]
    },
    "properties": {
        "Species":"	Yellow-rumped Warbler	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90941395	,	45.34768528	]
    },
    "properties": {
        "Species":"	Golden-crowned Kinglet	", 
        "Time":"	2023-11-15T05:41:32	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.91894204	,	45.3478336	]
    },
    "properties": {
        "Species":"	Northern Flicker	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.92218	,	45.34866	]
    },
    "properties": {
        "Species":"	Blue-headed Vireo	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.92212761	,	45.34866312	]
    },
    "properties": {
        "Species":"	Fox Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.92267681	,	45.34870968	]
    },
    "properties": {
        "Species":"	Warbler sp.	", 
        "Time":"	2023-11-16T10:15:20	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.92155197	,	45.34880576	]
    },
    "properties": {
        "Species":"	Barred Owl	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.92155197	,	45.34880576	]
    },
    "properties": {
        "Species":"	Blue-headed Vireo	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90737463	,	45.34888909	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.90737463	,	45.34888909	]
    },
    "properties": {
        "Species":"	Hermit Thrush	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.90737463	,	45.34888909	]
    },
    "properties": {
        "Species":"	Nashville Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.6659574	,	45.35053674	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.91478362	,	45.35296957	]
    },
    "properties": {
        "Species":"	Yellow-bellied Sapsucker	", 
        "Time":"	2023-11-16T09:37:47	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.91546362	,	45.35310845	]
    },
    "properties": {
        "Species":"	Golden-crowned Kinglet	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.64585532	,	45.3540882	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.7162377	,	45.36610556	]
    },
    "properties": {
        "Species":"	Swainson's Thrush	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.74587169	,	45.37986816	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69952458	,	45.38071864	]
    },
    "properties": {
        "Species":"	Chipping Sparrow	", 
        "Time":"	2023-05-12T21:01:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69852264	,	45.38086432	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-05-16T19:47:09	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70022025	,	45.3818375	]
    },
    "properties": {
        "Species":"	Tennessee Warbler	", 
        "Time":"	2023-09-15T17:29:59	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69929518	,	45.3820787	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-06-17T19:26:04	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69926635	,	45.38211352	]
    },
    "properties": {
        "Species":"	Warbler sp.	", 
        "Time":"	2023-08-28T23:05:03	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.69928544	,	45.3821236	]
    },
    "properties": {
        "Species":"	American Redstart	", 
        "Time":"	2023-08-28T23:02:36	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.69915284	,	45.38273868	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-06-17T19:23:40	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69793191	,	45.38279077	]
    },
    "properties": {
        "Species":"	Ruby-throated Hummingbird	", 
        "Time":"	2023-09-15T17:28:27	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.6941641	,	45.38319545	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-05-18T20:44:52	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69420897	,	45.38319548	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-08-28T22:57:32	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69253969	,	45.3839691	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-07-25T20:21:45	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69259772	,	45.38399421	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-07-25T20:20:29	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.67172497	,	45.38440874	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-05-16T19:42:17	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.67170754	,	45.38442873	]
    },
    "properties": {
        "Species":"	Warbler sp.	", 
        "Time":"	2023-09-08T21:18:05	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.67185729	,	45.38454103	]
    },
    "properties": {
        "Species":"	Brown Creeper	", 
        "Time":"	2023-04-15T11:29:46	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.67205757	,	45.38454553	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-09-07T20:33:45	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.619253	,	45.38523602	]
    },
    "properties": {
        "Species":"	Fox Sparrow	", 
        "Time":"	2023-10-18T14:52:10	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.60473	,	45.39527	]
    },
    "properties": {
        "Species":"	Hairy Woodpecker	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.73722192	,	45.39539719	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-05-18T17:38:48	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.617887	,	45.3957774	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-07-28T10:42:02	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.6179557	,	45.3957792	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-07-28T10:45:07	", 
        "Status":"	No Birds Found	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":[	-75.66283779	,	45.39918047	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.6632133	,	45.39938387	]
    },
    "properties": {
        "Species":"	Brown Creeper	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.6632133	,	45.39938387	]
    },
    "properties": {
        "Species":"	Ruby-crowned Kinglet	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.62512234	,	45.40161953	]
    },
    "properties": {
        "Species":"	Rock Pigeon	", 
        "Time":"	2023-11-16T09:44:59	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.62519101	,	45.4017506	]
    },
    "properties": {
        "Species":"	White-breasted Nuthatch	", 
        "Time":"	2023-11-16T09:43:04	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.65136	,	45.4061	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-10-19T19:11:03	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69783991	,	45.4163907	]
    },
    "properties": {
        "Species":"	Common Grackle	", 
        "Time":"	2023-07-25T19:41:22	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70171383	,	45.41687151	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T08:59:09	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70192549	,	45.41687468	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T09:01:21	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.7012764	,	45.41687694	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T10:26:51	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70126312	,	45.41688711	]
    },
    "properties": {
        "Species":"	Pine Warbler	", 
        "Time":"	2023-11-16T09:24:42	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70125883	,	45.41689163	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T10:34:51	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70125883	,	45.41689464	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T10:37:08	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.7011604	,	45.41718576	]
    },
    "properties": {
        "Species":"	Pine Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.7011604	,	45.41718576	]
    },
    "properties": {
        "Species":"	Winter Wren	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70172675	,	45.41722265	]
    },
    "properties": {
        "Species":"	Hermit Thrush	", 
        "Time":"	2023-11-16T08:53:33	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70147153	,	45.41730625	]
    },
    "properties": {
        "Species":"	Kinglet sp.	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70396355	,	45.41784946	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T09:05:11	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70320931	,	45.4179741	]
    },
    "properties": {
        "Species":"	Brown Creeper	", 
        "Time":"	2023-11-16T09:28:22	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70294409	,	45.41808674	]
    },
    "properties": {
        "Species":"	Hermit Thrush	", 
        "Time":"	2023-11-16T09:30:59	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70307952	,	45.41818406	]
    },
    "properties": {
        "Species":"	Brown Creeper	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70307952	,	45.41818406	]
    },
    "properties": {
        "Species":"	Hermit Thrush	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70345082	,	45.4182514	]
    },
    "properties": {
        "Species":"	Black-throated Green Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70219615	,	45.41859256	]
    },
    "properties": {
        "Species":"	American Goldfinch	", 
        "Time":"	2023-11-20T18:37:12	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70267434	,	45.41876747	]
    },
    "properties": {
        "Species":"	Yellow-bellied Sapsucker	", 
        "Time":"	2023-11-16T08:56:42	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.68766086	,	45.41938732	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.70385572	,	45.4201726	]
    },
    "properties": {
        "Species":"	Yellow-bellied Sapsucker	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69855324	,	45.42096915	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T09:14:16	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.70135244	,	45.42116473	]
    },
    "properties": {
        "Species":"	Yellow-bellied Sapsucker	", 
        "Time":"	2023-11-16T09:11:40	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69912956	,	45.42125968	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69595251	,	45.42193361	]

    },
    "properties": {
        "Species":"	Brown Creeper	", 
        "Time":"	2023-11-16T09:40:48	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.69526905	,	45.42217812	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T09:16:29	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.73807404	,	45.42810851	]
    },
    "properties": {
        "Species":"	American Robin	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.73018179	,	45.43283433	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates": [	-75.73018179	,	45.43283433	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.61566248	,	45.43361564	]
    },
    "properties": {
        "Species":"	White-throated Sparrow	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.6255666	,	45.43948033	]
    },
    "properties": {
        "Species":"	Dark-eyed Junco	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.62588862	,	45.4401312	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Unknown	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.62699978	,	45.4406362	]
    },
    "properties": {
        "Species":"	Yellow-rumped Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Alive	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.62699978	,	45.4406362	]
    },
    "properties": {
        "Species":"	Yellow-rumped Warbler	", 
        "Time":"	2023-11-16T16:49:39	", 
        "Status":"	Dead	",

    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [	-75.4980796	,	45.45758835	]
    },
    "properties": {
        "Species":"	Unknown	", 
        "Time":"	2023-05-18T20:53:36	", 
        "Status":"	Dead	",

    }
},


                    ]
                }
                });
  
          // Add a symbol layer for birds
          map.addLayer({
            'id': 'place',
            'type': 'symbol',
            'source': 'place',
            'layout': {
                'icon-image': 'custom-marker',
                'icon-size': 0.15
                
                
            }
         });
        }
    );

        // Create a popup, but don't add it to the map yet.
        const popup = new maplibregl.Popup
        ({
            closeButton: true,
            closeOnClick: true
        });

        map.on('mouseenter', 'place', (e) => 
        
        {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const place = e.features[0];

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates)
            .setHTML(`
                <h3>${place.properties.Species}</h3>
                <p>Time: ${place.properties.Time}</p>
                <p>Status: ${place.properties.Status}</p>
                `)
                .addTo(map);
        });

        map.on('mouseleave', 'place', () => {
            map.getCanvas().style.cursor = '';
            
        });
});
    