TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_t.jpg",
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
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0",
      "hfov": 45,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 133,
  "thumbnailUrl": "media/panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_t.jpg",
  "id": "panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9",
  "audios": [
   {
    "data": {
     "label": "db69ba14-725a-48d9-bcd5-4f7bf95c9468"
    },
    "class": "PanoramaAudio",
    "id": "audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955.mp3",
     "oggUrl": "media/audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955.ogg"
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0010_360_200802200322_360_equi",
  "cardboardMenu": {
   "class": "Menu",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_C8FDF3C8_C464_AFF7_41DC_AFBBB264582C",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "children": [
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0010_360_200802200322_360_equi",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0012_360_200802200224_360",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0966_360_200802200919_360_equi",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0959_360_200802201046_360_equi_equi",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0017_360_200802200156_360",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "push",
   "width": 48.2,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "shadow": false,
   "paddingTop": 0,
   "maxWidth": 49,
   "borderRadius": 0,
   "height": 36,
   "maxHeight": 36,
   "backgroundOpacity": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 1,
   "id": "IconButton_C9EB5988_C42F_BAE2_41C0_97150A789AA6",
   "data": {
    "name": "IconButton11832"
   },
   "iconURL": "skin/IconButton_C9EB5988_C42F_BAE2_41C0_97150A789AA6.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "minWidth": 1
  },
  "viewerArea": "this.MainViewer",
  "buttonPause": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "push",
   "width": 34,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "height": 34,
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A_rollover.png",
   "maxHeight": 34,
   "maxWidth": 34,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "top": 20,
   "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, false, 0, null, null, false)",
   "transparencyActive": true,
   "cursor": "hand",
   "borderRadius": 0,
   "minHeight": 30,
   "id": "IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A",
   "data": {
    "name": "X"
   },
   "iconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "minWidth": 30,
   "right": 20
  },
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 120,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_t.jpg",
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
    "overlays": [
     {
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A6559EFC_B02E_6CA2_41D0_9415C1FFCBF4",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_A68C717C_B02E_55A2_41D8_4539E857568E)"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -40.23,
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
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_tcap0",
      "hfov": 60,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_t.jpg",
  "id": "panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4",
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0012_360_200802200224_360",
  "cardboardMenu": "this.Menu_C8FDF3C8_C464_AFF7_41DC_AFBBB264582C",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.4,
   "hfov": 122,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_t.jpg",
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
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A2DD510C_B0EA_3561_41D3_ECFCC361746D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_A3821906_B0EA_D561_4196_D78CA92ACB0D, {'pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','borderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'paddingBottom':5,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconHeight':20,'iconColor':'#000000','paddingTop':5,'pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3}, this.ImageResource_A287CACE_B0EA_54E1_41D2_DF753B5832C4, null, null, null, null, false); this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_D4C12F3C_C438_7622_41CD_F836AC3A3B3E)"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
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
        "yaw": 12.01,
        "hfov": 5.88,
        "pitch": 14.33
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.01,
        "roll": 0,
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
      ]
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": 12.01,
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "pitch": 14.33,
      "popupMaxWidth": "95%",
      "id": "popup_A3821906_B0EA_D561_4196_D78CA92ACB0D",
      "hfov": 5.06,
      "popupMaxHeight": "95%",
      "showDuration": 500,
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
      "hideEasing": "cubic_out"
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_tcap0",
      "hfov": 68.4,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_D4C6222A_C429_8E26_41DC_3CE14EB5B331",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 11.1,
        "hfov": 7.36,
        "image": {
         "levels": [
          {
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 130,
           "url": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.99
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_t.jpg",
  "id": "panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035",
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0966_360_200802200919_360_equi",
  "cardboardMenu": "this.Menu_C8FDF3C8_C464_AFF7_41DC_AFBBB264582C",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "hfov": 121,
   "pitch": 12.01
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_t.jpg",
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
    "overlays": [
     {
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A6179228_B02A_77A1_41A2_A33426C7C23A",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704, {'pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','borderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'paddingBottom':5,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconHeight':20,'iconColor':'#000000','paddingTop':5,'pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3}, this.ImageResource_BE52F0B7_B3DF_0797_41E0_4CB76628CFB3, null, null, null, null, false)"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 14.17,
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
      ]
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": 14.17,
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "pitch": 11.23,
      "popupMaxWidth": "95%",
      "id": "popup_BE2E603B_B3E1_069F_41DD_C4EE065F6704",
      "hfov": 4.31,
      "popupMaxHeight": "95%",
      "showDuration": 500,
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
      "hideEasing": "cubic_out"
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_tcap0",
      "hfov": 45,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_t.jpg",
  "id": "panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6",
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0959_360_200802201046_360_equi_equi",
  "cardboardMenu": "this.Menu_C8FDF3C8_C464_AFF7_41DC_AFBBB264582C",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.6,
   "hfov": 123,
   "pitch": -0.89
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_tcap0",
      "hfov": 61.2,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_D613754E_C468_8A7E_41DF_B21CEC048D0F",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_D61FC847_C468_FA6E_41DA_7654BB2D1428, {'pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'iconLineWidth':5,'paddingRight':5,'pressedBorderColor':'#000000','borderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'paddingBottom':5,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconHeight':20,'iconColor':'#000000','paddingTop':5,'pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false); this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_C9B25700_C454_34DA_41E3_4FABC88EE07F)"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -162.48,
        "hfov": 7.79,
        "image": {
         "levels": [
          {
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 130,
           "url": "media/panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.55
       }
      ]
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": -162.48,
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "pitch": 15.46,
      "popupMaxWidth": "95%",
      "id": "popup_D61FC847_C468_FA6E_41DA_7654BB2D1428",
      "hfov": 6.6,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "levels": [
        {
         "height": 564,
         "class": "ImageResourceLevel",
         "width": 375,
         "url": "media/popup_D61FC847_C468_FA6E_41DA_7654BB2D1428_0_0.jpg"
        },
        {
         "height": 512,
         "class": "ImageResourceLevel",
         "width": 340,
         "url": "media/popup_D61FC847_C468_FA6E_41DA_7654BB2D1428_0_1.jpg"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideEasing": "cubic_out"
     }
    ]
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_t.jpg",
  "id": "panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3",
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0017_360_200802200156_360",
  "cardboardMenu": "this.Menu_C8FDF3C8_C464_AFF7_41DC_AFBBB264582C",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.93,
   "hfov": 117,
   "pitch": -0.72
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6",
    "end": "this.setComponentVisibility(this.HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35, false, -1, this.effect_D5E3583D_C428_BA1D_41DD_1A0CC1643B3F, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35, false, -1, this.effect_D5E3583D_C428_BA1D_41DD_1A0CC1643B3F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35, true, -1, this.effect_D5E3283D_C428_BA1D_41BC_37E221276F6E, 'showEffect', false)",
    "camera": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 0, 1)",
    "camera": "this.panorama_BDB62788_B07A_7D61_41D9_0815634C7AE9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 1, 2)",
    "camera": "this.panorama_BEB348EB_B06A_54A7_41CF_7A06525362C4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 2, 3)",
    "camera": "this.panorama_BE49DDD0_B0DA_2CE1_41B8_5102E8580035_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6",
    "end": "this.setComponentVisibility(this.HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35, false, -1, this.effect_D5E3583D_C428_BA1D_41DD_1A0CC1643B3F, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35, false, -1, this.effect_D5E3583D_C428_BA1D_41DD_1A0CC1643B3F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35, true, -1, this.effect_D5E3283D_C428_BA1D_41BC_37E221276F6E, 'showEffect', false)",
    "camera": "this.panorama_A7904F82_B03A_2D61_41CA_8B53ED69ACE6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 4, 0)",
    "camera": "this.panorama_D55ECD36_C457_9A2F_41E4_094579DDADA3_camera"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "width": 2010,
      "label": "IMG_20200802_1520523",
      "thumbnailUrl": "media/album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0_t.png",
      "id": "album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0",
      "height": 3829,
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.54",
       "zoomFactor": 1.1,
       "y": "0.46"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    }
   ]
  },
  "label": "Photo Album IMG_20200802_1520523",
  "thumbnailUrl": "media/album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_t.png",
  "id": "album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC"
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonNext": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "push",
   "width": 150,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_pressed.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_rollover.png",
   "maxHeight": 50,
   "maxWidth": 50,
   "backgroundOpacity": 0,
   "top": "45.14%",
   "transparencyActive": true,
   "cursor": "hand",
   "borderRadius": 0,
   "minHeight": 40,
   "bottom": "44.86%",
   "id": "IconButton_E9C48E21_C598_FC06_41D5_5911166B8343",
   "data": {
    "name": ">"
   },
   "iconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "minWidth": 40,
   "right": "0.91%"
  },
  "viewerArea": "this.MainViewer",
  "buttonPrevious": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "push",
   "width": 150,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_pressed.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_rollover.png",
   "maxHeight": 50,
   "maxWidth": 50,
   "backgroundOpacity": 0,
   "top": "45%",
   "transparencyActive": true,
   "cursor": "hand",
   "borderRadius": 0,
   "minHeight": 40,
   "bottom": "45%",
   "id": "IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507",
   "data": {
    "name": "<"
   },
   "iconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "minWidth": 40,
   "left": "1%"
  },
  "buttonPause": "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A"
 },
 "this.album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC_0",
 {
  "class": "PlayList",
  "id": "playList_C818E3BB_C464_AF89_41C0_4615C45F03DA",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_A1196D34_B0D5_EDA1_41DE_C1AC1E312CFC"
   }
  ]
 },
 "this.Menu_C8FDF3C8_C464_AFF7_41DC_AFBBB264582C",
 {
  "data": {
   "label": "fe9278f4-7171-4466-b632-97b854da11a3"
  },
  "class": "MediaAudio",
  "id": "audio_A68C717C_B02E_55A2_41D8_4539E857568E",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_A68C717C_B02E_55A2_41D8_4539E857568E.mp3",
   "oggUrl": "media/audio_A68C717C_B02E_55A2_41D8_4539E857568E.ogg"
  }
 },
 {
  "data": {
   "label": "6027321f-0c06-4bfa-bc57-a3db931fd43b"
  },
  "class": "MediaAudio",
  "id": "audio_D4C12F3C_C438_7622_41CD_F836AC3A3B3E",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_D4C12F3C_C438_7622_41CD_F836AC3A3B3E.mp3",
   "oggUrl": "media/audio_D4C12F3C_C438_7622_41CD_F836AC3A3B3E.ogg"
  }
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
 {
  "data": {
   "label": "2f63bb37-626b-4a1e-8cf1-d812062e6f41"
  },
  "class": "MediaAudio",
  "id": "audio_C9B25700_C454_34DA_41E3_4FABC88EE07F",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_C9B25700_C454_34DA_41E3_4FABC88EE07F.mp3",
   "oggUrl": "media/audio_C9B25700_C454_34DA_41E3_4FABC88EE07F.ogg"
  }
 },
 "this.popup_D61FC847_C468_FA6E_41DA_7654BB2D1428",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_D5E3283D_C428_BA1D_41BC_37E221276F6E"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_D5E3583D_C428_BA1D_41DD_1A0CC1643B3F"
 },
 "this.effect_D5E3283D_C428_BA1D_41BC_37E221276F6E",
 "this.effect_D5E3583D_C428_BA1D_41DD_1A0CC1643B3F",
 "this.audio_A14F24A7_B463_0FB7_41DA_A65B29B3F955"
], "children": [
 {
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "minHeight": 50,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipTextShadowOpacity": 0,
  "bottom": "0%",
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "left": 0,
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "propagateClick": false,
  "playbackBarHeadShadowHorizontalLength": 0
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "url": "skin/Image_38AE0033_3506_F021_416B_4DF12FECDFC8.png",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "maxHeight": 271,
  "maxWidth": 1920,
  "scaleMode": "fill",
  "borderRadius": 0,
  "height": "29.71%",
  "backgroundOpacity": 0,
  "top": 0,
  "visible": false,
  "minHeight": 1,
  "id": "Image_38AE0033_3506_F021_416B_4DF12FECDFC8",
  "data": {
   "name": "white stripe"
  },
  "paddingLeft": 0,
  "class": "Image",
  "minWidth": 1,
  "left": 0
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": "32%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": 0,
  "visible": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_32774EFE_3505_5022_41AB_699D4C74C8C0",
  "data": {
   "name": "- UPPER BUTTON SET"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "absolute",
  "paddingLeft": 0,
  "class": "Container",
  "minWidth": 1,
  "left": 0,
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": 498,
    "paddingRight": 10,
    "height": 98,
    "shadow": false,
    "paddingBottom": 10,
    "paddingTop": 10,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "top": 31,
    "visible": false,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:'Arial Black', Gadget, sans-serif;\"><B>COMPANY</B></SPAN><SPAN STYLE=\"font-size:33px;\">LOGO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">www.company.com</SPAN></SPAN></DIV></div>",
    "minHeight": 1,
    "id": "HTMLText_3D347B78_3503_302E_41BA_D209C34F0BE6",
    "data": {
     "name": "Company logo"
    },
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "class": "HTMLText",
    "minWidth": 1,
    "left": 36.24
   },
   {
    "horizontalAlign": "right",
    "propagateClick": false,
    "borderSize": 0,
    "width": 796,
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "height": 70.95,
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "backgroundOpacity": 0,
    "top": 0,
    "visible": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_3D9A43EF_350D_5021_41B3_B4C8121813DC",
    "gap": 9,
    "data": {
     "name": "Container button set"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "paddingLeft": 0,
    "class": "Container",
    "minWidth": 1,
    "right": 29,
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3D99702F_350D_5022_41C3_F32EBDE4AC3A",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 1"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "class": "Button",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 1"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3C071467_3505_5021_41C0_9CD078438C82",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 2"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "class": "Button",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 2"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3C5B5026_3507_7023_418D_5AEF13450F0A",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 3"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "class": "Button",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 3"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3C6B7BF5_3505_5021_41B1_F65D95672705",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 4"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "class": "Button",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 4"
     }
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "itemBorderColor": "#FFFFFF",
  "rollOverItemBackgroundColorRatios": [],
  "itemLabelFontStyle": "normal",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowSpread": 1,
  "itemLabelHorizontalAlign": "center",
  "itemMode": "thumbnail-only",
  "itemThumbnailBorderRadius": 0,
  "paddingTop": 16,
  "itemThumbnailWidth": 100,
  "itemPaddingRight": 3,
  "scrollBarVisible": "rollOver",
  "itemPaddingTop": 3,
  "itemThumbnailHeight": 68,
  "playList": "this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "borderRadius": 0,
  "itemBorderSize": 0,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "itemLabelGap": 5,
  "itemThumbnailShadowVerticalLength": 0,
  "rollOverItemBackgroundColor": [],
  "itemOpacity": 1,
  "selectedItemLabelFontWeight": "bold",
  "itemLabelFontFamily": "Arial",
  "rollOverItemBorderSize": 0,
  "layout": "horizontal",
  "itemHorizontalAlign": "center",
  "gap": 10,
  "itemBorderRadius": 0,
  "itemThumbnailShadow": true,
  "itemPaddingBottom": 3,
  "minWidth": 1,
  "class": "ThumbnailList",
  "itemPaddingLeft": 3,
  "rollOverItemThumbnailShadowBlurRadius": 10,
  "rollOverItemBorderRadius": 0,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "itemVerticalAlign": "middle",
  "width": "100%",
  "borderSize": 0,
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "scrollBarWidth": 5,
  "paddingRight": 20,
  "backgroundColorRatios": [
   0
  ],
  "verticalAlign": "top",
  "paddingBottom": 10,
  "shadow": false,
  "itemBackgroundColorRatios": [],
  "itemThumbnailShadowHorizontalLength": 0,
  "scrollBarOpacity": 0.5,
  "itemLabelPosition": "bottom",
  "itemLabelTextDecoration": "none",
  "rollOverItemThumbnailShadowOpacity": 1,
  "backgroundOpacity": 0.3,
  "itemThumbnailShadowBlurRadius": 5,
  "bottom": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8",
  "itemBackgroundOpacity": 0,
  "data": {
   "name": "ThumbnailList"
  },
  "itemBackgroundColorDirection": "vertical",
  "itemLabelFontWeight": "normal",
  "paddingLeft": 20,
  "backgroundColorDirection": "vertical",
  "itemLabelFontSize": 14,
  "itemThumbnailShadowOpacity": 0.3,
  "itemLabelFontColor": "#FFFFFF",
  "left": "0%"
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "width": 85,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": "5%",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "bottom": "5%",
  "id": "Container_3FEB359B_3662_45B1_41A1_0A030760AA1D",
  "gap": 0,
  "data": {
   "name": "- RIGHT BUTTON SET"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "paddingLeft": 0,
  "class": "Container",
  "minWidth": 1,
  "right": 0,
  "children": [
   "this.IconButton_C9EB5988_C42F_BAE2_41C0_97150A789AA6",
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 48,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A_rollover.png",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "maxHeight": 57,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C, true, 0, null, null, false); this.openLink(\"https://ethnomuseum.ru/en/\", \"_blank\")",
    "transparencyActive": false,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A",
    "data": {
     "name": "IconButton info"
    },
    "iconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC_rollover.png",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "maxHeight": 57,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, true, 0, null, null, false)",
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC",
    "data": {
     "name": "IconButton floorplan"
    },
    "iconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "toggle",
    "width": 55,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "pressedIconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C_pressed.png",
    "paddingTop": 0,
    "click": "if(!this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, true, 0, null, null, false) } else if(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, false, 0, null, null, false) }",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 55,
    "maxHeight": 57,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C",
    "data": {
     "name": "IconButton thumblist"
    },
    "iconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3_rollover.png",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "maxHeight": 57,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, true, 0, null, null, false)",
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3",
    "data": {
     "name": "IconButton photo"
    },
    "iconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258_rollover.png",
    "maxHeight": 57,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258",
    "data": {
     "name": "IconButton video"
    },
    "iconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "toggle",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "pressedIconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E_pressed.png",
    "paddingTop": 0,
    "maxHeight": 56,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 56,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E",
    "data": {
     "name": "IconButton audio"
    },
    "iconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C_rollover.png",
    "maxHeight": 57,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 56,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C",
    "data": {
     "name": "IconButton FB"
    },
    "iconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221_rollover.png",
    "maxHeight": 57,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221",
    "data": {
     "name": "IconButton Twitter"
    },
    "iconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221.png",
    "paddingLeft": 0,
    "class": "IconButton",
    "minWidth": 1
   }
  ]
 },
 {
  "horizontalAlign": "center",
  "propagateClick": false,
  "borderSize": 0,
  "width": "100%",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C",
  "data": {
   "name": "-- INFO"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "horizontal",
  "paddingLeft": 0,
  "class": "Container",
  "minWidth": 1,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": "95%",
    "borderSize": 0,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "backgroundColorRatios": [
     0
    ],
    "verticalAlign": "top",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "maxHeight": 420,
    "maxWidth": 722,
    "height": "95%",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 0.3,
    "borderRadius": 0,
    "visible": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_E1F793EC_C5AF_A41E_41DE_B6A1C0172D80",
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "gap": 10,
    "layout": "absolute",
    "paddingLeft": 0,
    "class": "Container",
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "100%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "backgroundColorRatios": [
       0
      ],
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "shadow": false,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "scrollBarWidth": 10,
      "overflow": "scroll",
      "backgroundOpacity": 0.7,
      "top": "0%",
      "visible": false,
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Container_E1F783EC_C5AF_A41E_41B9_A87E2497FAAE",
      "data": {
       "name": "Container 1"
      },
      "contentOpaque": false,
      "gap": 17,
      "layout": "horizontal",
      "paddingLeft": 0,
      "class": "Container",
      "minWidth": 1,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "scrollBarMargin": 0,
        "scrollBarWidth": 8,
        "width": "50.97%",
        "borderSize": 0,
        "paddingRight": 10,
        "paddingBottom": 10,
        "shadow": false,
        "paddingTop": 10,
        "scrollBarOpacity": 0.8,
        "borderRadius": 0,
        "height": "75.238%",
        "backgroundOpacity": 0,
        "visible": false,
        "scrollBarColor": "#3399FF",
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:35px;\"><B>House Info</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:25px;\"><B><I>Subtitle</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl lorem, condimentum nec pharetra ac, fringilla at quam. Nam gravida efficitur dui vitae auctor. Donec in ultricies orci, in sodales risus. Aliquam lacinia velit felis, vitae ullamcorper quam aliquam in. Phasellus vitae massa condimentum, tincidunt lacus a, faucibus lorem. Duis vitae rutrum dui. Aliquam erat volutpat. Integer bibendum maximus nulla eu ultrices. Nam sed dignissim risus. Mauris molestie libero ut imperdiet mattis. In eget nulla vel leo pharetra volutpat quis vel odio. Quisque tincidunt, dui sed egestas laoreet, augue tellus tincidunt ligula, eu consectetur dolor purus quis nisl. Morbi rhoncus vel magna malesuada dictum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Duis pretium, tortor sit amet mollis pharetra, dolor tellus mattis justo, at consequat purus enim eu velit. Duis cursus urna tellus.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">In nec urna eu urna tincidunt commodo nec quis dolor. Nulla consectetur, justo sed scelerisque congue, dolor ex pharetra velit, et dapibus lorem quam vel sapien. Cras justo dui, consequat et blandit at, consectetur in justo. Nulla posuere nulla libero, et tempus risus lobortis vitae. Nunc sed posuere diam. Phasellus non mauris lacus.</SPAN></SPAN></DIV></div>",
        "minHeight": 1,
        "id": "HTMLText_E1F7B3EC_C5AF_A41F_41E0_E2BA38FA4626",
        "data": {
         "name": "HTMLText"
        },
        "paddingLeft": 10,
        "class": "HTMLText",
        "minWidth": 1,
        "scrollBarVisible": "rollOver"
       },
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "width": "32.825%",
        "paddingRight": 0,
        "url": "skin/Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06.jpg",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "shadow": false,
        "paddingTop": 0,
        "maxHeight": 237,
        "maxWidth": 237,
        "scaleMode": "fit_inside",
        "borderRadius": 0,
        "height": "56.429%",
        "backgroundOpacity": 0,
        "minHeight": 1,
        "id": "Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06",
        "data": {
         "name": "Image"
        },
        "paddingLeft": 0,
        "class": "Image",
        "minWidth": 1
       }
      ]
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 34,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 34,
      "shadow": false,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794_rollover.png",
      "maxHeight": 34,
      "maxWidth": 34,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": 20,
      "click": "this.setComponentVisibility(this.Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794.png",
      "paddingLeft": 0,
      "class": "IconButton",
      "minWidth": 1,
      "right": 20
     }
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "backgroundColorRatios": [
   0
  ],
  "verticalAlign": "top",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "height": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0.7,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_E0A829D0_C5BB_E407_41E3_334A63423D29",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "absolute",
  "paddingLeft": 0,
  "class": "Container",
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "paddingRight": 30,
    "creationPolicy": "delayed",
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "top",
    "paddingBottom": 30,
    "shadow": false,
    "paddingTop": 30,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minHeight": 1,
    "bottom": "12%",
    "id": "Container_E0A8D9D0_C5BB_E407_41DC_C8A6343CBB92",
    "gap": 10,
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "paddingLeft": 30,
    "class": "Container",
    "minWidth": 1,
    "left": "15%",
    "backgroundColorDirection": "vertical",
    "right": "15%",
    "children": [
     {
      "transitionDuration": 500,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "progressBarBorderColor": "#000000",
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "minHeight": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "class": "ViewerArea",
      "minWidth": 1,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "width": "100%",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "paddingBottom": 0,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontFamily": "Arial",
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowColor": "#000000",
      "top": "0%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipTextShadowOpacity": 0,
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "id": "ViewerAreaLabeled_E0A8C9D0_C5BB_E407_41CE_073D958CCF63",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "height": "100%",
      "paddingLeft": 0,
      "toolTipFontStyle": "normal",
      "left": "0%",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "toolTipFontWeight": "normal",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarOpacity": 1,
      "playbackBarLeft": 0,
      "propagateClick": false,
      "playbackBarHeadShadowHorizontalLength": 0
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 34,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 34,
      "shadow": false,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09_rollover.png",
      "maxHeight": 34,
      "maxWidth": 34,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": 0,
      "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09.png",
      "paddingLeft": 0,
      "class": "IconButton",
      "minWidth": 1,
      "right": 0
     }
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "height": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0.8,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "absolute",
  "paddingLeft": 0,
  "class": "Container",
  "minWidth": 1,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "top",
    "paddingBottom": 0,
    "shadow": false,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minHeight": 1,
    "bottom": "12%",
    "id": "Container_E9C4AE21_C598_FC06_41BB_4CE2E02053A5",
    "gap": 10,
    "data": {
     "name": "Global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "paddingLeft": 0,
    "class": "Container",
    "minWidth": 1,
    "left": "16%",
    "backgroundColorDirection": "vertical",
    "right": "16%",
    "children": [
     {
      "transitionDuration": 500,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "progressBarBorderColor": "#000000",
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "minHeight": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "class": "ViewerArea",
      "minWidth": 1,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "width": "100%",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "paddingBottom": 0,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontFamily": "Arial",
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowColor": "#000000",
      "top": "0%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipTextShadowOpacity": 0,
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "id": "ViewerAreaLabeled_E9C4BE21_C598_FC06_41D4_4C90E452373D",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "height": "100%",
      "paddingLeft": 0,
      "toolTipFontStyle": "normal",
      "left": "0%",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "toolTipFontWeight": "normal",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarOpacity": 1,
      "playbackBarLeft": 0,
      "propagateClick": false,
      "playbackBarHeadShadowHorizontalLength": 0
     },
     "this.IconButton_E9C48E21_C598_FC06_41D5_5911166B8343",
     "this.IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507",
     "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A"
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "toolTipBorderRadius": 3,
  "horizontalAlign": "center",
  "borderSize": 0,
  "mode": "toggle",
  "toolTipOpacity": 1,
  "width": 47,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "verticalAlign": "middle",
  "height": 35,
  "toolTipShadowColor": "#333333",
  "toolTipFontFamily": "Arial",
  "toolTipBorderSize": 1,
  "shadow": false,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
  "maxHeight": 128,
  "toolTipTextShadowColor": "#000000",
  "maxWidth": 128,
  "paddingBottom": 0,
  "toolTipPaddingTop": 4,
  "backgroundOpacity": 0,
  "top": "2.64%",
  "transparencyActive": true,
  "cursor": "hand",
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "minHeight": 1,
  "id": "IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384",
  "data": {
   "name": "IconButton1493"
  },
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "iconURL": "skin/IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384.png",
  "toolTipShadowOpacity": 1,
  "toolTip": "Fullscreen",
  "toolTipFontWeight": "normal",
  "paddingLeft": 0,
  "class": "IconButton",
  "minWidth": 1,
  "toolTipFontStyle": "normal",
  "left": "1.46%",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "55.4%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": "59.517%",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0,
  "top": "7.67%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:53px;\"><B>Christianization</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Dissemination and introduction of the Orthodox Christianity among the indigenous peoples of Russia Arctic zone were realized in \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043b\u043e\u0441\u044c \u043d\u0430 XIV-XIX century. Christianization of Siberia indigenous population started in the late XVI century \u2013 the time of exploration of this territory by the Russian service men. Enormous distances and difficult access to Siberian region, harsh climatic conditions, incomprehension of the Christianity basic beliefs by local population and their unwillingness to reject their traditional beliefs conserving their system of subsistence alongside language barrier significantly complicated activity of Orthodox missionaries. However, Christianization was held on without strict opposition of traditional beliefs to Christianity, that\u2019s why it didn\u2019t provoke resistance of Siberian peoples.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#cccccc;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> By the early XX century Christianity was adapted by Saami, Nenets, Khants, Mansi, Selkups, Dolgans, Evens, and Yakuts, partly by some groups of northern Evenks and Kets. However, the Christianity of Siberian peoples and Saami was distinguished by its syncretism: reception of explicit ritual aspect of the Orthodox Christianity and combination of new religion with traditional beliefs. Cross was perceived as an amulet. Therefore, people worn crosses not only on their necks, but also sewed them on woman and children clothing, breast ornaments and even to shaman costumes. Elements of syncretism are traced in native people\u2019s attitude to icons and images of saints. People frequently put tableware with sacrificial food before icons, and hanged near them figurines of spirits -family protectors and drums. The images of the Saint Nicholas of Myra and Jesus Christ were among the attributes of Evenk shamans. The most Christianized peoples were Evenks, Evens and Yakuts.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_D520208E_C428_8AFF_41D6_A6BAF9808F35",
  "data": {
   "name": "HTMLText53815"
  },
  "paddingLeft": 20,
  "class": "HTMLText",
  "minWidth": 1,
  "left": "4.65%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "backgroundColor": [
   "#000000"
  ],
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "backgroundOpacity": 0.55,
  "top": 0,
  "visible": false,
  "borderRadius": 0,
  "minHeight": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent2298"
  },
  "paddingLeft": 0,
  "class": "UIComponent",
  "minWidth": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  }
 },
 {
  "propagateClick": false,
  "backgroundColor": [],
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scaleMode": "custom",
  "backgroundOpacity": 1,
  "top": 0,
  "visible": false,
  "borderRadius": 0,
  "minHeight": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage2299"
  },
  "paddingLeft": 0,
  "class": "ZoomImage",
  "minWidth": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontColor": "#FFFFFF",
  "fontSize": 12,
  "mode": "push",
  "borderSize": 0,
  "paddingRight": 5,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "fontStyle": "normal",
  "shadow": false,
  "paddingTop": 5,
  "shadowBlurRadius": 6,
  "fontWeight": "normal",
  "backgroundOpacity": 0.3,
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "iconColor": "#000000",
  "pressedIconColor": "#888888",
  "borderColor": "#000000",
  "borderRadius": 0,
  "iconWidth": 20,
  "minHeight": 0,
  "id": "closeButtonPopupPanorama",
  "gap": 5,
  "shadowSpread": 1,
  "data": {
   "name": "CloseButton2300"
  },
  "iconBeforeLabel": true,
  "shadowColor": "#000000",
  "iconHeight": 20,
  "paddingLeft": 5,
  "class": "CloseButton",
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "layout": "horizontal",
  "right": 10,
  "label": "",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "rollOverIconColor": "#666666"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C9EB5988_C42F_BAE2_41C0_97150A789AA6], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); }
 },
 "borderRadius": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": true,
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player448"
 },
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "class": "Player",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "buttonToggleFullscreen": "this.IconButton_A60FC02E_B056_53BE_4187_2B55F1E96384",
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": true
})