TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonPause": {
   "paddingBottom": 0,
   "mode": "push",
   "width": 34,
   "height": 34,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0,
   "propagateClick": false,
   "iconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A.png",
   "maxHeight": 34,
   "maxWidth": 34,
   "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, false, 0, null, null, false)",
   "shadow": false,
   "top": 20,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A_rollover.png",
   "borderSize": 0,
   "backgroundOpacity": 0,
   "class": "IconButton",
   "id": "IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A",
   "data": {
    "name": "X"
   },
   "minHeight": 30,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 30,
   "horizontalAlign": "center",
   "transparencyActive": true,
   "right": 20
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_t.jpg",
  "pitch": 0,
  "label": "YIVR_Stitch_0010_360_200802200322_360_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0",
      "rotate": false,
      "hfov": 54,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 869,
         "class": "ImageResourceLevel",
         "width": 869,
         "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_t.jpg"
   }
  ],
  "hfovMax": 133,
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955.ogg",
     "mp3Url": "media/audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955.mp3"
    },
    "data": {
     "label": "db69ba14-725a-48d9-bcd5-4f7bf95c9468"
    },
    "autoplay": true
   }
  ],
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 126,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_t.jpg",
  "pitch": 0,
  "label": "YIVR_Stitch_0012_360_200802200224_360",
  "frames": [
   {
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_tcap0",
      "rotate": false,
      "hfov": 54,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 869,
         "class": "ImageResourceLevel",
         "width": 869,
         "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A6559EFC_B02E_6CA2_41D0_9415C1FFCBF4",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "yaw": -40.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.98,
        "image": {
         "levels": [
          {
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 120,
           "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.48
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_A68C717C_B02E_55A2_41D8_4539E857568E)"
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_t.jpg"
   }
  ],
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": 2.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_t.jpg",
  "pitch": 0,
  "label": "YIVR_Stitch_0966_360_200802200919_360_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_tcap0",
      "rotate": false,
      "hfov": 66,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 869,
         "class": "ImageResourceLevel",
         "width": 869,
         "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.88,
        "yaw": 12.01,
        "image": {
         "levels": [
          {
           "height": 86,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_0_HS_1_1_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 14.33
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A2DD510C_B0EA_3561_41D3_ECFCC361746D",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Polygon"
      },
      "items": [
       {
        "roll": 0,
        "yaw": 12.01,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.88,
        "image": {
         "levels": [
          {
           "height": 172,
           "class": "ImageResourceLevel",
           "width": 94,
           "url": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 14.33
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_A3821906_B0EA_D561_4196_D78CA92ACB0D, {'pressedIconWidth':20,'pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingRight':5,'rollOverIconLineWidth':5,'iconColor':'#000000','iconLineWidth':5,'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconWidth':20,'pressedIconLineWidth':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverIconColor':'#666666'}, this.ImageResource_A287CACE_B0EA_54E1_41D2_DF753B5832C4, null, null, null, null, false)"
       }
      ]
     },
     {
      "showEasing": "cubic_in",
      "hfov": 5.06,
      "yaw": 12.01,
      "popupMaxWidth": "95%",
      "rotationZ": 0,
      "popupMaxHeight": "95%",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "id": "popup_A3821906_B0EA_D561_4196_D78CA92ACB0D",
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "image": {
       "levels": [
        {
         "height": 1024,
         "class": "ImageResourceLevel",
         "width": 537,
         "url": "media/popup_A3821906_B0EA_D561_4196_D78CA92ACB0D_0_2.png"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "showDuration": 500,
      "pitch": 14.33
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_t.jpg"
   }
  ],
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 121,
   "yaw": 9.32,
   "pitch": 12.01
  },
  "class": "PanoramaCamera",
  "id": "panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_t.jpg",
  "pitch": 0,
  "label": "YIVR_Stitch_0959_360_200802201046_360_equi_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_tcap0",
      "rotate": false,
      "hfov": 45,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 869,
         "class": "ImageResourceLevel",
         "width": 869,
         "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A6179228_B02A_77A1_41A2_A33426C7C23A",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "yaw": 14.17,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.29,
        "image": {
         "levels": [
          {
           "height": 144,
           "class": "ImageResourceLevel",
           "width": 151,
           "url": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.23
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704, {'pressedIconWidth':20,'pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingRight':5,'rollOverIconLineWidth':5,'iconColor':'#000000','iconLineWidth':5,'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconWidth':20,'pressedIconLineWidth':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverIconColor':'#666666'}, this.ImageResource_BE52F0B7_B3DF_0797_41E0_4CB76628CFB3, null, null, null, null, false)"
       }
      ]
     },
     {
      "showEasing": "cubic_in",
      "hfov": 4.31,
      "yaw": 14.17,
      "popupMaxWidth": "95%",
      "rotationZ": 0,
      "popupMaxHeight": "95%",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "id": "popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704",
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "image": {
       "levels": [
        {
         "height": 1023,
         "class": "ImageResourceLevel",
         "width": 499,
         "url": "media/popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704_0_2.png"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "showDuration": 500,
      "pitch": 11.23
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_t.jpg"
   }
  ],
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 123,
   "yaw": 16.6,
   "pitch": -0.89
  },
  "class": "PanoramaCamera",
  "id": "panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9",
    "camera": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4",
    "camera": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035",
    "camera": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6",
    "camera": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9",
    "camera": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4",
    "camera": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035",
    "camera": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6",
    "camera": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 3, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_A2AE688A_B0F6_5361_41D0_AEB0EB4D9CF7_t.jpg",
  "label": "Volveremos a Viajar Contigo",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_A2AE688A_B0F6_5361_41D0_AEB0EB4D9CF7.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_A2AE688A_B0F6_5361_41D0_AEB0EB4D9CF7",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_A216E512_B463_0E68_41E1_6583008A29B1",
  "items": [
   {
    "class": "VideoPlayListItem",
    "media": "this.video_A2AE688A_B0F6_5361_41D0_AEB0EB4D9CF7",
    "player": "this.MainViewerVideoPlayer",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A216E512_B463_0E68_41E1_6583008A29B1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A216E512_B463_0E68_41E1_6583008A29B1, 0, this.video_A2AE688A_B0F6_5361_41D0_AEB0EB4D9CF7)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_t.png",
  "label": "Photo Album IMG_20200802_1520523",
  "class": "PhotoAlbum",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.54",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.46"
      },
      "easing": "linear"
     },
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0_t.png",
      "label": "IMG_20200802_1520523",
      "class": "Photo",
      "width": 2010,
      "id": "album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0",
      "height": 3829,
      "image": {
       "levels": [
        {
         "url": "media/album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  },
  "id": "album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC"
 },
 {
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonPrevious": {
   "paddingBottom": 0,
   "mode": "push",
   "width": 150,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0,
   "propagateClick": false,
   "iconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507.png",
   "pressedIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_pressed.png",
   "maxHeight": 50,
   "maxWidth": 50,
   "shadow": false,
   "top": "45%",
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_rollover.png",
   "borderSize": 0,
   "backgroundOpacity": 0,
   "class": "IconButton",
   "id": "IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507",
   "data": {
    "name": "<"
   },
   "minHeight": 40,
   "bottom": "45%",
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 40,
   "left": "1%",
   "transparencyActive": true,
   "horizontalAlign": "center"
  },
  "buttonNext": {
   "paddingBottom": 0,
   "mode": "push",
   "width": 150,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0,
   "propagateClick": false,
   "iconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343.png",
   "pressedIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_pressed.png",
   "maxWidth": 50,
   "shadow": false,
   "top": "45.14%",
   "cursor": "hand",
   "maxHeight": 50,
   "rollOverIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_rollover.png",
   "borderSize": 0,
   "backgroundOpacity": 0,
   "class": "IconButton",
   "id": "IconButton_E9C48E21_C598_FC06_41D5_5911166B8343",
   "data": {
    "name": ">"
   },
   "minHeight": 40,
   "bottom": "44.86%",
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 40,
   "horizontalAlign": "center",
   "transparencyActive": true,
   "right": "0.91%"
  }
 },
 "this.album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0",
 {
  "class": "PlayList",
  "id": "playList_A2199515_B463_0E68_41E6_7B08A0B7FD68",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC"
   }
  ]
 },
 {
  "class": "MediaAudio",
  "id": "audio_A68C717C_B02E_55A2_41D8_4539E857568E",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_A68C717C_B02E_55A2_41D8_4539E857568E.ogg",
   "mp3Url": "media/audio_A68C717C_B02E_55A2_41D8_4539E857568E.mp3"
  },
  "data": {
   "label": "fe9278f4-7171-4466-b632-97b854da11a3"
  },
  "autoplay": true
 },
 "this.popup_A3821906_B0EA_D561_4196_D78CA92ACB0D",
 {
  "levels": [
   {
    "height": 3829,
    "class": "ImageResourceLevel",
    "width": 2010,
    "url": "media/popup_A3821906_B0EA_D561_4196_D78CA92ACB0D_0_0.png"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1075,
    "url": "media/popup_A3821906_B0EA_D561_4196_D78CA92ACB0D_0_1.png"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 537,
    "url": "media/popup_A3821906_B0EA_D561_4196_D78CA92ACB0D_0_2.png"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 268,
    "url": "media/popup_A3821906_B0EA_D561_4196_D78CA92ACB0D_0_3.png"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_A287CACE_B0EA_54E1_41D2_DF753B5832C4"
 },
 "this.popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704",
 {
  "levels": [
   {
    "height": 3542,
    "class": "ImageResourceLevel",
    "width": 1728,
    "url": "media/popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704_0_0.png"
   },
   {
    "height": 2047,
    "class": "ImageResourceLevel",
    "width": 999,
    "url": "media/popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704_0_1.png"
   },
   {
    "height": 1023,
    "class": "ImageResourceLevel",
    "width": 499,
    "url": "media/popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704_0_2.png"
   },
   {
    "height": 511,
    "class": "ImageResourceLevel",
    "width": 249,
    "url": "media/popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704_0_3.png"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_BE52F0B7_B3DF_0797_41E0_4CB76628CFB3"
 },
 "this.audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955"
], "children": [
 {
  "progressBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "paddingTop": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "toolTipFontColor": "#606060",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingTop": 4,
  "toolTipFontWeight": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "borderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "minHeight": 50,
  "progressBarBorderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingBottom": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "progressBottom": 0,
  "toolTipFontSize": 12,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 10,
  "paddingRight": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "propagateClick": false,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "transitionDuration": 500,
  "playbackBarHeadShadowOpacity": 0.7,
  "shadow": false,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "top": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "bottom": "0%",
  "playbackBarLeft": 0,
  "id": "MainViewer",
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "playbackBarHeadHeight": 15,
  "progressBorderRadius": 0,
  "paddingLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "left": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "transitionMode": "blending",
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ]
 },
 {
  "paddingBottom": 0,
  "verticalAlign": "top",
  "paddingRight": 0,
  "paddingTop": 0,
  "url": "skin/Image_38AE0033_3506_F021_416B_4DF12FECDFC8.png",
  "propagateClick": false,
  "width": "100%",
  "maxHeight": 271,
  "maxWidth": 1920,
  "scaleMode": "fill",
  "height": "29.71%",
  "shadow": false,
  "top": 0,
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "class": "Image",
  "id": "Image_38AE0033_3506_F021_416B_4DF12FECDFC8",
  "data": {
   "name": "white stripe"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 1,
  "left": 0,
  "horizontalAlign": "left"
 },
 {
  "layout": "absolute",
  "children": [
   {
    "paddingBottom": 10,
    "width": 498,
    "paddingRight": 10,
    "height": 98,
    "paddingTop": 10,
    "propagateClick": false,
    "shadow": false,
    "top": 31,
    "scrollBarColor": "#000000",
    "visible": false,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "HTMLText",
    "id": "HTMLText_3D347B78_3503_302E_41BA_D209C34F0BE6",
    "scrollBarWidth": 10,
    "data": {
     "name": "Company logo"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:'Arial Black', Gadget, sans-serif;\"><B>COMPANY</B></SPAN><SPAN STYLE=\"font-size:33px;\">LOGO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">www.company.com</SPAN></SPAN></DIV></div>",
    "paddingLeft": 10,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "left": 36.24,
    "scrollBarMargin": 2,
    "scrollBarVisible": "rollOver"
   },
   {
    "layout": "horizontal",
    "children": [
     {
      "layout": "horizontal",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "verticalAlign": "middle",
      "width": 100,
      "mode": "push",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "iconHeight": 32,
      "height": 44,
      "iconBeforeLabel": true,
      "paddingTop": 0,
      "fontFamily": "Arial",
      "propagateClick": false,
      "fontStyle": "normal",
      "gap": 5,
      "fontSize": 15,
      "iconWidth": 32,
      "fontWeight": "bold",
      "shadow": false,
      "shadowBlurRadius": 6,
      "rollOverFontColor": "#333333",
      "cursor": "hand",
      "borderSize": 0,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "class": "Button",
      "id": "Button_3D99702F_350D_5022_41C3_F32EBDE4AC3A",
      "data": {
       "name": "Button 1"
      },
      "minHeight": 1,
      "shadowSpread": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "minWidth": 1,
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "fontColor": "#666666",
      "label": "BUTTON 1"
     },
     {
      "layout": "horizontal",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "verticalAlign": "middle",
      "width": 100,
      "mode": "push",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "iconHeight": 32,
      "height": 44,
      "iconBeforeLabel": true,
      "paddingTop": 0,
      "fontFamily": "Arial",
      "propagateClick": false,
      "fontStyle": "normal",
      "gap": 5,
      "fontSize": 15,
      "iconWidth": 32,
      "fontWeight": "bold",
      "shadow": false,
      "shadowBlurRadius": 6,
      "rollOverFontColor": "#333333",
      "cursor": "hand",
      "borderSize": 0,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "class": "Button",
      "id": "Button_3C071467_3505_5021_41C0_9CD078438C82",
      "data": {
       "name": "Button 2"
      },
      "minHeight": 1,
      "shadowSpread": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "minWidth": 1,
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "fontColor": "#666666",
      "label": "BUTTON 2"
     },
     {
      "layout": "horizontal",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "verticalAlign": "middle",
      "width": 100,
      "mode": "push",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "iconHeight": 32,
      "height": 44,
      "iconBeforeLabel": true,
      "paddingTop": 0,
      "fontFamily": "Arial",
      "propagateClick": false,
      "fontStyle": "normal",
      "gap": 5,
      "fontSize": 15,
      "iconWidth": 32,
      "fontWeight": "bold",
      "shadow": false,
      "shadowBlurRadius": 6,
      "rollOverFontColor": "#333333",
      "cursor": "hand",
      "borderSize": 0,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "class": "Button",
      "id": "Button_3C5B5026_3507_7023_418D_5AEF13450F0A",
      "data": {
       "name": "Button 3"
      },
      "minHeight": 1,
      "shadowSpread": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "minWidth": 1,
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "fontColor": "#666666",
      "label": "BUTTON 3"
     },
     {
      "layout": "horizontal",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "verticalAlign": "middle",
      "width": 100,
      "mode": "push",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "iconHeight": 32,
      "height": 44,
      "iconBeforeLabel": true,
      "paddingTop": 0,
      "fontFamily": "Arial",
      "propagateClick": false,
      "fontStyle": "normal",
      "gap": 5,
      "fontSize": 15,
      "iconWidth": 32,
      "fontWeight": "bold",
      "shadow": false,
      "shadowBlurRadius": 6,
      "rollOverFontColor": "#333333",
      "cursor": "hand",
      "borderSize": 0,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "class": "Button",
      "id": "Button_3C6B7BF5_3505_5021_41B1_F65D95672705",
      "data": {
       "name": "Button 4"
      },
      "minHeight": 1,
      "shadowSpread": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "minWidth": 1,
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "fontColor": "#666666",
      "label": "BUTTON 4"
     }
    ],
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "width": 796,
    "gap": 9,
    "paddingRight": 0,
    "height": 70.95,
    "paddingTop": 0,
    "propagateClick": false,
    "creationPolicy": "delayed",
    "shadow": false,
    "top": 0,
    "scrollBarColor": "#000000",
    "visible": false,
    "overflow": "scroll",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "Container",
    "id": "Container_3D9A43EF_350D_5021_41B3_B4C8121813DC",
    "scrollBarWidth": 10,
    "data": {
     "name": "Container button set"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "right": 29,
    "scrollBarVisible": "rollOver"
   }
  ],
  "paddingBottom": 0,
  "verticalAlign": "top",
  "paddingRight": 0,
  "gap": 10,
  "paddingTop": 0,
  "width": "100%",
  "propagateClick": false,
  "creationPolicy": "delayed",
  "shadow": false,
  "height": "32%",
  "overflow": "scroll",
  "top": 0,
  "scrollBarColor": "#000000",
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "class": "Container",
  "id": "Container_32774EFE_3505_5022_41AB_699D4C74C8C0",
  "data": {
   "name": "- UPPER BUTTON SET"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "left": 0,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "horizontal",
  "itemThumbnailBorderRadius": 0,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "itemOpacity": 1,
  "itemLabelFontFamily": "Arial",
  "itemBorderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 16,
  "itemLabelGap": 5,
  "rollOverItemBackgroundColor": [],
  "rollOverItemBorderSize": 0,
  "gap": 10,
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "itemThumbnailShadow": true,
  "itemPaddingBottom": 3,
  "itemBackgroundColorRatios": [],
  "itemHorizontalAlign": "center",
  "scrollBarColor": "#000000",
  "itemBackgroundColor": [],
  "itemPaddingLeft": 3,
  "borderSize": 0,
  "rollOverItemThumbnailShadowBlurRadius": 10,
  "horizontalAlign": "left",
  "class": "ThumbnailList",
  "rollOverItemBorderRadius": 0,
  "backgroundOpacity": 0.3,
  "itemThumbnailShadowVerticalLength": 0,
  "itemThumbnailOpacity": 1,
  "rollOverItemThumbnailShadowOpacity": 1,
  "minHeight": 1,
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadowBlurRadius": 5,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "scrollBarVisible": "rollOver",
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 10,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "itemBackgroundColorDirection": "vertical",
  "paddingRight": 20,
  "itemThumbnailWidth": 100,
  "itemLabelFontWeight": "normal",
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "propagateClick": false,
  "rollOverItemBackgroundColorRatios": [],
  "width": "100%",
  "itemThumbnailShadowHorizontalLength": 0,
  "itemLabelFontColor": "#FFFFFF",
  "shadow": false,
  "itemThumbnailShadowOpacity": 0.3,
  "itemLabelFontStyle": "normal",
  "itemBorderColor": "#FFFFFF",
  "scrollBarWidth": 5,
  "itemThumbnailShadowSpread": 1,
  "bottom": 0,
  "playList": "this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8",
  "itemVerticalAlign": "middle",
  "itemPaddingTop": 3,
  "borderRadius": 0,
  "itemLabelHorizontalAlign": "center",
  "data": {
   "name": "ThumbnailList"
  },
  "paddingLeft": 20,
  "itemThumbnailShadowColor": "#000000",
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "itemMode": "thumbnail-only",
  "itemLabelPosition": "bottom",
  "itemThumbnailHeight": 68,
  "itemPaddingRight": 3
 },
 {
  "layout": "vertical",
  "children": [
   {
    "paddingBottom": 0,
    "toolTipPaddingLeft": 6,
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipFontSize": 12,
    "mode": "toggle",
    "width": 47,
    "toolTip": "Fullscreen",
    "height": 35,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "toolTipBorderColor": "#767676",
    "toolTipDisplayTime": 600,
    "paddingTop": 0,
    "propagateClick": false,
    "toolTipShadowSpread": 0,
    "toolTipTextShadowBlurRadius": 3,
    "iconURL": "skin/IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384.png",
    "toolTipShadowBlurRadius": 3,
    "maxWidth": 128,
    "toolTipPaddingRight": 6,
    "toolTipOpacity": 1,
    "toolTipShadowColor": "#333333",
    "toolTipPaddingTop": 4,
    "toolTipTextShadowColor": "#000000",
    "shadow": false,
    "toolTipFontWeight": "normal",
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "toolTipShadowVerticalLength": 0,
    "cursor": "hand",
    "maxHeight": 128,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384",
    "data": {
     "name": "IconButton1493"
    },
    "minHeight": 1,
    "toolTipPaddingBottom": 4,
    "borderRadius": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowOpacity": 1,
    "transparencyActive": true,
    "toolTipBorderSize": 1
   },
   {
    "paddingBottom": 0,
    "mode": "push",
    "width": 57,
    "height": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingTop": 0,
    "propagateClick": false,
    "iconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A.png",
    "maxWidth": 57,
    "click": "this.setComponentVisibility(this.Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C, true, 0, null, null, false); this.openLink(\"https://ethnomuseum.ru/en/\", \"_blank\")",
    "shadow": false,
    "cursor": "hand",
    "maxHeight": 57,
    "rollOverIconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A_rollover.png",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A",
    "data": {
     "name": "IconButton info"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "push",
    "width": 57,
    "height": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingTop": 0,
    "propagateClick": false,
    "iconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC.png",
    "maxWidth": 57,
    "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, true, 0, null, null, false)",
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "maxHeight": 57,
    "rollOverIconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC_rollover.png",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC",
    "data": {
     "name": "IconButton floorplan"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "toggle",
    "width": 55,
    "height": 55,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingTop": 0,
    "pressedIconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C_pressed.png",
    "propagateClick": false,
    "iconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C.png",
    "maxWidth": 57,
    "click": "if(!this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, true, 0, null, null, false) } else if(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, false, 0, null, null, false) }",
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "maxHeight": 57,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C",
    "data": {
     "name": "IconButton thumblist"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "push",
    "width": 57,
    "height": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingTop": 0,
    "propagateClick": false,
    "iconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3.png",
    "maxWidth": 57,
    "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, true, 0, null, null, false)",
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "maxHeight": 57,
    "rollOverIconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3_rollover.png",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3",
    "data": {
     "name": "IconButton photo"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "push",
    "width": 57,
    "height": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingTop": 0,
    "propagateClick": false,
    "iconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258.png",
    "maxWidth": 57,
    "click": "this.setMediaBehaviour(this.playList_A216E512_B463_0E68_41E1_6583008A29B1, 0); this.MainViewerVideoPlayer.play()",
    "shadow": false,
    "cursor": "hand",
    "maxHeight": 57,
    "rollOverIconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258_rollover.png",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258",
    "data": {
     "name": "IconButton video"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "toggle",
    "width": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": 56,
    "paddingTop": 0,
    "pressedIconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E_pressed.png",
    "propagateClick": false,
    "iconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E.png",
    "maxWidth": 57,
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "maxHeight": 56,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E",
    "data": {
     "name": "IconButton audio"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "push",
    "width": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": 56,
    "paddingTop": 0,
    "propagateClick": false,
    "iconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C.png",
    "maxWidth": 57,
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "maxHeight": 57,
    "rollOverIconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C_rollover.png",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C",
    "data": {
     "name": "IconButton FB"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   },
   {
    "paddingBottom": 0,
    "mode": "push",
    "width": 57,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": 57,
    "paddingTop": 0,
    "propagateClick": false,
    "iconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221.png",
    "maxWidth": 57,
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "maxHeight": 57,
    "rollOverIconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221_rollover.png",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "class": "IconButton",
    "id": "IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221",
    "data": {
     "name": "IconButton Twitter"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "paddingLeft": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "transparencyActive": false
   }
  ],
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "width": 85,
  "gap": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "propagateClick": false,
  "creationPolicy": "delayed",
  "shadow": false,
  "top": "5%",
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "borderSize": 0,
  "backgroundOpacity": 0,
  "class": "Container",
  "id": "Container_3FEB359B_3662_45B1_41A1_0A030760AA1D",
  "scrollBarWidth": 10,
  "data": {
   "name": "- RIGHT BUTTON SET"
  },
  "minHeight": 1,
  "bottom": "5%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "right": 0,
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "horizontal",
  "children": [
   {
    "layout": "absolute",
    "children": [
     {
      "layout": "horizontal",
      "children": [
       {
        "paddingBottom": 10,
        "paddingRight": 10,
        "paddingTop": 10,
        "width": "50.97%",
        "propagateClick": false,
        "shadow": false,
        "height": "75.238%",
        "scrollBarColor": "#3399FF",
        "visible": false,
        "borderSize": 0,
        "scrollBarWidth": 8,
        "backgroundOpacity": 0,
        "class": "HTMLText",
        "id": "HTMLText_E1F7B3EC_C5AF_A41F_41E0_E2BA38FA4626",
        "data": {
         "name": "HTMLText"
        },
        "minHeight": 1,
        "borderRadius": 0,
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:35px;\"><B>House Info</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:25px;\"><B><I>Subtitle</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl lorem, condimentum nec pharetra ac, fringilla at quam. Nam gravida efficitur dui vitae auctor. Donec in ultricies orci, in sodales risus. Aliquam lacinia velit felis, vitae ullamcorper quam aliquam in. Phasellus vitae massa condimentum, tincidunt lacus a, faucibus lorem. Duis vitae rutrum dui. Aliquam erat volutpat. Integer bibendum maximus nulla eu ultrices. Nam sed dignissim risus. Mauris molestie libero ut imperdiet mattis. In eget nulla vel leo pharetra volutpat quis vel odio. Quisque tincidunt, dui sed egestas laoreet, augue tellus tincidunt ligula, eu consectetur dolor purus quis nisl. Morbi rhoncus vel magna malesuada dictum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Duis pretium, tortor sit amet mollis pharetra, dolor tellus mattis justo, at consequat purus enim eu velit. Duis cursus urna tellus.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">In nec urna eu urna tincidunt commodo nec quis dolor. Nulla consectetur, justo sed scelerisque congue, dolor ex pharetra velit, et dapibus lorem quam vel sapien. Cras justo dui, consequat et blandit at, consectetur in justo. Nulla posuere nulla libero, et tempus risus lobortis vitae. Nunc sed posuere diam. Phasellus non mauris lacus.</SPAN></SPAN></DIV></div>",
        "paddingLeft": 10,
        "minWidth": 1,
        "scrollBarOpacity": 0.8,
        "scrollBarMargin": 0,
        "scrollBarVisible": "rollOver"
       },
       {
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "paddingRight": 0,
        "paddingTop": 0,
        "url": "skin/Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06.jpg",
        "propagateClick": false,
        "width": "32.825%",
        "maxHeight": 237,
        "maxWidth": 237,
        "scaleMode": "fit_inside",
        "height": "56.429%",
        "shadow": false,
        "borderSize": 0,
        "backgroundOpacity": 0,
        "class": "Image",
        "id": "Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06",
        "data": {
         "name": "Image"
        },
        "minHeight": 1,
        "borderRadius": 0,
        "paddingLeft": 0,
        "minWidth": 1,
        "horizontalAlign": "center"
       }
      ],
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "verticalAlign": "middle",
      "paddingRight": 0,
      "backgroundColorRatios": [
       0
      ],
      "paddingTop": 0,
      "gap": 17,
      "width": "100%",
      "propagateClick": false,
      "creationPolicy": "delayed",
      "shadow": false,
      "height": "100%",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "visible": false,
      "borderSize": 0,
      "backgroundOpacity": 0.7,
      "class": "Container",
      "id": "Container_E1F783EC_C5AF_A41E_41B9_A87E2497FAAE",
      "top": "0%",
      "data": {
       "name": "Container 1"
      },
      "minHeight": 1,
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "paddingLeft": 0,
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "left": "0%",
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "scrollBarVisible": "rollOver"
     },
     {
      "paddingBottom": 0,
      "mode": "push",
      "width": 34,
      "height": 34,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "paddingTop": 0,
      "propagateClick": false,
      "iconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794.png",
      "maxHeight": 34,
      "maxWidth": 34,
      "click": "this.setComponentVisibility(this.Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C, false, 0, null, null, false)",
      "shadow": false,
      "top": 20,
      "cursor": "hand",
      "rollOverIconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794_rollover.png",
      "borderSize": 0,
      "backgroundOpacity": 0,
      "class": "IconButton",
      "id": "IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794",
      "data": {
       "name": "X"
      },
      "minHeight": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "transparencyActive": true,
      "right": 20
     }
    ],
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "verticalAlign": "top",
    "paddingRight": 0,
    "backgroundColorRatios": [
     0
    ],
    "paddingTop": 0,
    "gap": 10,
    "width": "95%",
    "propagateClick": false,
    "maxWidth": 722,
    "creationPolicy": "delayed",
    "height": "95%",
    "shadow": false,
    "scrollBarColor": "#000000",
    "visible": false,
    "maxHeight": 420,
    "borderSize": 0,
    "backgroundOpacity": 0.3,
    "class": "Container",
    "id": "Container_E1F793EC_C5AF_A41E_41DE_B6A1C0172D80",
    "data": {
     "name": "Container global"
    },
    "minHeight": 1,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "overflow": "scroll",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "scrollBarVisible": "rollOver"
   }
  ],
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "gap": 10,
  "paddingTop": 0,
  "width": "100%",
  "propagateClick": false,
  "creationPolicy": "delayed",
  "shadow": false,
  "height": "100%",
  "overflow": "scroll",
  "top": "0%",
  "scrollBarColor": "#000000",
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "class": "Container",
  "id": "Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C",
  "data": {
   "name": "-- INFO"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "absolute",
  "children": [
   {
    "layout": "absolute",
    "children": [
     {
      "progressBackgroundColorDirection": "vertical",
      "toolTipPaddingLeft": 6,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipPaddingRight": 6,
      "toolTipFontColor": "#606060",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingTop": 4,
      "toolTipOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderSize": 0,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "class": "ViewerArea",
      "minHeight": 1,
      "progressBarBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "minWidth": 1,
      "playbackBarHeadBorderSize": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingBottom": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 10,
      "paddingRight": 0,
      "playbackBarBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "height": "100%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressOpacity": 1,
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipShadowBlurRadius": 3,
      "transitionDuration": 500,
      "playbackBarHeadShadowOpacity": 0.7,
      "shadow": false,
      "playbackBarHeadShadow": true,
      "toolTipShadowColor": "#333333",
      "progressBackgroundOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarOpacity": 1,
      "top": "0%",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarLeft": 0,
      "id": "ViewerAreaLabeled_E0A8C9D0_C5BB_E407_41CE_073D958CCF63",
      "progressBarOpacity": 1,
      "borderRadius": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderRadius": 0,
      "paddingLeft": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "left": "0%",
      "toolTipShadowOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "transitionMode": "blending",
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ]
     },
     {
      "paddingBottom": 0,
      "mode": "push",
      "width": 34,
      "height": 34,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "paddingTop": 0,
      "propagateClick": false,
      "iconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09.png",
      "maxHeight": 34,
      "maxWidth": 34,
      "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, false, 0, null, null, false)",
      "shadow": false,
      "top": 0,
      "cursor": "hand",
      "rollOverIconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09_rollover.png",
      "borderSize": 0,
      "backgroundOpacity": 0,
      "class": "IconButton",
      "id": "IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09",
      "data": {
       "name": "X"
      },
      "minHeight": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "transparencyActive": true,
      "right": 0
     }
    ],
    "paddingBottom": 30,
    "backgroundColorDirection": "vertical",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "verticalAlign": "top",
    "paddingRight": 30,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingTop": 30,
    "gap": 10,
    "propagateClick": false,
    "creationPolicy": "delayed",
    "shadow": false,
    "overflow": "scroll",
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "backgroundOpacity": 1,
    "class": "Container",
    "id": "Container_E0A8D9D0_C5BB_E407_41DC_C8A6343CBB92",
    "data": {
     "name": "Container global"
    },
    "minHeight": 1,
    "bottom": "12%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 30,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "left": "15%",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "right": "15%",
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver"
   }
  ],
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "gap": 10,
  "width": "100%",
  "propagateClick": false,
  "creationPolicy": "delayed",
  "shadow": false,
  "height": "100%",
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 0.7,
  "class": "Container",
  "id": "Container_E0A829D0_C5BB_E407_41E3_334A63423D29",
  "top": "0%",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "absolute",
  "children": [
   {
    "layout": "absolute",
    "children": [
     {
      "progressBackgroundColorDirection": "vertical",
      "toolTipPaddingLeft": 6,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadWidth": 6,
      "toolTipPaddingRight": 6,
      "toolTipFontColor": "#606060",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingTop": 4,
      "toolTipOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderSize": 0,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "class": "ViewerArea",
      "minHeight": 1,
      "progressBarBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "minWidth": 1,
      "playbackBarHeadBorderSize": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingBottom": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 10,
      "paddingRight": 0,
      "playbackBarBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "height": "100%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressOpacity": 1,
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipShadowBlurRadius": 3,
      "transitionDuration": 500,
      "playbackBarHeadShadowOpacity": 0.7,
      "shadow": false,
      "playbackBarHeadShadow": true,
      "toolTipShadowColor": "#333333",
      "progressBackgroundOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarOpacity": 1,
      "top": "0%",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarLeft": 0,
      "id": "ViewerAreaLabeled_E9C4BE21_C598_FC06_41D4_4C90E452373D",
      "progressBarOpacity": 1,
      "borderRadius": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderRadius": 0,
      "paddingLeft": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "left": "0%",
      "toolTipShadowOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "transitionMode": "blending",
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ]
     },
     "this.IconButton_E9C48E21_C598_FC06_41D5_5911166B8343",
     "this.IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507",
     "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A"
    ],
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "verticalAlign": "top",
    "paddingRight": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingTop": 0,
    "gap": 10,
    "propagateClick": false,
    "creationPolicy": "delayed",
    "shadow": false,
    "overflow": "scroll",
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "backgroundOpacity": 1,
    "class": "Container",
    "id": "Container_E9C4AE21_C598_FC06_41BB_4CE2E02053A5",
    "data": {
     "name": "Global"
    },
    "minHeight": 1,
    "bottom": "12%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "left": "16%",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "right": "16%",
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver"
   }
  ],
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "gap": 10,
  "width": "100%",
  "propagateClick": false,
  "creationPolicy": "delayed",
  "shadow": false,
  "height": "100%",
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 0.8,
  "class": "Container",
  "id": "Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE",
  "top": "0%",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver"
 },
 {
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "propagateClick": false,
  "shadow": false,
  "top": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 0.55,
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent7389"
  },
  "minHeight": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 0,
  "left": 0,
  "right": 0
 },
 {
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingRight": 0,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "propagateClick": false,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "visible": false,
  "borderSize": 0,
  "backgroundOpacity": 1,
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage7390"
  },
  "minHeight": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 0,
  "left": 0,
  "right": 0
 },
 {
  "layout": "horizontal",
  "paddingBottom": 5,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "mode": "push",
  "paddingRight": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 5,
  "iconHeight": 20,
  "iconBeforeLabel": true,
  "verticalAlign": "middle",
  "propagateClick": false,
  "fontFamily": "Arial",
  "fontStyle": "normal",
  "fontSize": 12,
  "shadow": false,
  "iconWidth": 20,
  "pressedIconColor": "#888888",
  "fontWeight": "normal",
  "shadowBlurRadius": 6,
  "top": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "cursor": "hand",
  "visible": false,
  "gap": 5,
  "borderSize": 0,
  "textDecoration": "none",
  "backgroundOpacity": 0.3,
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "data": {
   "name": "CloseButton7391"
  },
  "minHeight": 0,
  "shadowSpread": 1,
  "borderRadius": 0,
  "paddingLeft": 5,
  "shadowColor": "#000000",
  "iconLineWidth": 5,
  "minWidth": 0,
  "borderColor": "#000000",
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "label": "",
  "right": 10,
  "iconColor": "#000000",
  "rollOverIconColor": "#666666"
 }
], 
 "layout": "absolute",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingTop": 0,
 "gap": 10,
 "width": "100%",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "shadow": false,
 "mobileMipmappingEnabled": true,
 "height": "100%",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "class": "Player",
 "id": "rootPlayer",
 "data": {
  "name": "Player448"
 },
 "minHeight": 20,
 "borderRadius": 0,
 "buttonToggleFullscreen": "this.IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "vrPolyfillScale": 1,
 "start": "this.syncPlaylists([this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384].forEach(function(component) { component.set('visible', false); }) }",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "desktopMipmappingEnabled": true
})