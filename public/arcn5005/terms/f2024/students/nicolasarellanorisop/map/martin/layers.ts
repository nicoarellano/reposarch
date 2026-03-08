const circleLayer: any = {
  type: 'circle',
  paint: {
    'circle-radius': 5,
    'circle-color': '#FF0000',
    'circle-stroke-color': '#ffffff',
    'circle-stroke-width': 1,
  },
};

const polygonLayer: any = {
  type: 'fill',
  paint: {
    'fill-color': '#ffff00',
    'fill-opacity': 0.7,
  },
};

const lineLayer: any = {
  type: 'line',
  paint: {
    'line-color': '#0000ff',
    'line-width': 2,
  },
};

const textLayer: any = {
  type: 'symbol',
  layout: {
    'text-field': '{name}',
    'text-font': ['Open Sans Regular'],
    'text-size': 12,
  },
  paint: {
    'text-color': '#000000',
  },
};

interface DndItem {
  name: string;
  sourceLayer: string;
  layer: any;
  legend?: boolean;
  textLayerName?: string;
  'fill-color'?: string;
  'circle-color'?: string;
  'line-color'?: string;
  'fill-opacity'?: number;
}

// The order of the layers in this array will determine the order in which they are rendered on the map
export const dndData: DndItem[] = [
  {
    name: 'DND Land',
    sourceLayer: 'C_DND_OWNED_LAND',
    'fill-color': '#facc15',
    layer: polygonLayer,
    'fill-opacity': 0.1,
  },
  {
    name: 'Contour Lines',
    sourceLayer: 'T_Contour_Intermediate',
    'line-color': '#aaa',
    layer: lineLayer,
  },
  {
    name: 'Grass Area',
    sourceLayer: 'P_V_Grass_Cut_Area',
    'fill-color': '#86efac',
    layer: polygonLayer,
  },
  {
    name: 'Pad',
    sourceLayer: 'P_Pad',
    'fill-color': '#d1d5db',
    layer: polygonLayer,
  },
  {
    name: 'Site Outline',
    sourceLayer: 'P_V_Outline',
    'line-color': '#097969',
    layer: lineLayer,
  },
  {
    name: 'Parking Lot',
    sourceLayer: 'P_Parking_Lot_Stall',
    'fill-color': '#fed7aa',
    layer: polygonLayer,
  },
  {
    name: 'Sidewalk',
    sourceLayer: 'P_Sidewalk',
    'line-color': '#fdef60',
    layer: lineLayer,
  },
  {
    name: 'Recreational Area',
    sourceLayer: 'P_Recreational_Area',
    'fill-color': '#f9528f',
    layer: polygonLayer,
  },
  {
    name: 'Buildings',
    sourceLayer: 'P_BUILDING',
    'fill-color': '#0cc',
    layer: polygonLayer,
  },
  // { name: "Building ID", sourceLayer: 'P_BUILDING', layer: textLayer, textLayerName: 'idname', legend: false},
  {
    name: 'Building Outline',
    sourceLayer: 'P_BUILDING',
    'line-color': 'black',
    layer: lineLayer,
    legend: false,
  },
  {
    name: 'Shelter Shed',
    sourceLayer: 'P_SHELTER_SHED',
    'fill-color': '#d38dfd',
    layer: polygonLayer,
  },
  {
    name: 'Spot Height',
    sourceLayer: 'T_Spot_Height',
    'circle-color': '#00cc00',
    layer: circleLayer,
  },
];
