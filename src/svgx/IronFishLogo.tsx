import { useColorMode, NAMED_COLORS, Icon, IconProps } from '@ironfish/ui-kit'

export function IronFishLogo(props: IconProps) {
  const { colorMode } = useColorMode()

  return (
    <Icon
      width="165"
      height="18"
      viewBox="0 0 165 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M69.33.1c-5.388 0-9.147 3.93-9.147 8.95 0 5.018 3.759 8.95 9.148 8.95 5.388 0 9.147-3.93 9.147-8.95S74.72.1 69.331.1Zm.163 15.164c-2.2.057-3.51-2.013-3.617-6.083-.117-4.48 1.093-6.288 3.262-6.346 2.256-.06 3.531 1.713 3.647 6.165.108 4.096-1.065 6.206-3.292 6.264ZM40.598.397h-7.12c-.395 0-.643.248-.643.644v.94c0 .42.147.569.518.716l.47.174c.519.197.692.47.692 1.013v10.333c0 .545-.173.815-.692 1.013l-.47.174c-.371.147-.518.296-.518.716v.94c0 .395.248.643.643.643h7.12c.395 0 .643-.248.643-.643v-.94c0-.42-.147-.57-.518-.716l-.47-.174c-.519-.198-.692-.47-.692-1.013V3.884c0-.545.173-.816.692-1.013l.47-.174c.371-.147.518-.296.518-.716v-.94c-.001-.397-.248-.644-.643-.644ZM59.624 15.428l-.273-.148c-.667-.37-1.162-.643-1.803-1.656l-2.325-3.732c-.123-.198-.05-.347.174-.396 1.953-.518 3.065-1.656 3.065-3.684 0-3.83-2.987-5.415-9.364-5.415L43.43.446c-.395.05-.593.272-.593.643v.94c0 .42.147.57.47.692l.569.222c.47.198.643.446.643.94v10.334c0 .545-.173.815-.692 1.013l-.47.174c-.37.147-.518.296-.518.716v.94c0 .395.248.643.643.643h7.12c.42 0 .644-.248.644-.643v-.94c0-.42-.15-.57-.519-.716l-.47-.174c-.518-.198-.692-.47-.692-1.013v-3.831c0-.222.075-.297.248-.297.198 0 .321.148.495.446l3.387 6.131c.42.767.742 1.04 1.606 1.04h4.325c.42 0 .594-.223.594-.545v-.89c-.004-.4-.127-.57-.597-.843ZM50.476 8.01h-.544a.338.338 0 0 1-.351-.35V2.938c0-.203.145-.35.35-.35h.572c1.923 0 3.114.697 3.114 2.63 0 1.934-.921 2.793-3.14 2.793ZM163.807 2.869l.471-.174c.371-.147.518-.296.518-.716v-.94c0-.396-.222-.644-.643-.644h-7.12c-.396 0-.644.248-.644.644v.94c0 .42.148.569.519.716l.47.174c.518.197.692.47.692 1.013v3.115a.285.285 0 0 1-.297.296h-5.241a.285.285 0 0 1-.297-.296V3.882c0-.545.174-.816.692-1.013l.47-.174c.372-.147.519-.296.519-.716v-.94c0-.396-.222-.644-.644-.644h-7.119c-.396 0-.644.248-.644.644v.94c0 .42.147.569.519.716l.47.174c.518.197.692.47.692 1.013v10.333c0 .545-.174.815-.692 1.013l-.47.174c-.372.147-.519.296-.519.716v.94c0 .395.248.643.644.643h7.119c.42 0 .644-.248.644-.643v-.94c0-.42-.149-.569-.519-.716l-.47-.174c-.518-.198-.692-.47-.692-1.013v-4.103c0-.174.123-.297.297-.297h5.241c.174 0 .297.123.297.297v4.103c0 .545-.174.815-.692 1.013l-.47.174c-.371.147-.519.296-.519.716v.94c0 .395.248.643.644.643h7.12c.419 0 .643-.248.643-.643v-.94c0-.42-.147-.569-.518-.716l-.471-.174c-.518-.198-.692-.47-.692-1.013V3.882c0-.543.174-.816.692-1.013ZM139.091 6.726l-3.016-.89c-1.483-.443-2.274-.964-2.274-1.83 0-.84.791-1.374 2.003-1.383 1.699-.013 3.216.766 5.391 3.115.296.32.617.445 1.063.197l.519-.296c.445-.246.513-.614.296-.989l-2.16-3.732c-.248-.44-.42-.743-.94-.743h-.239c-.593 0-.667.273-1.261.273-.766 0-1.589-.297-2.992-.297-3.881 0-6.403 1.878-6.403 5.191 0 2.768 2.003 4.326 4.475 5.143l3.214 1.063c1.581.519 2.423 1.114 2.423 2.201 0 1.162-.89 1.68-2.349 1.68-2.225 0-4.154-1.26-6.179-3.93-.321-.42-.644-.494-1.064-.296l-.815.395c-.371.174-.475.547-.246 1.013l2.276 4.673c.205.42.494.593.841.593h.295c.544 0 .914-.371 1.41-.371.914 0 1.83.446 3.881.446 4.104 0 7.021-1.905 7.021-5.563-.003-3.389-2.253-4.823-5.17-5.663ZM126.573.397h-7.12c-.396 0-.644.248-.644.644v.94c0 .42.148.569.519.716l.47.174c.519.197.692.47.692 1.013v10.333c0 .545-.173.815-.692 1.013l-.47.174c-.371.147-.519.296-.519.716v.94c0 .395.248.643.644.643h7.12c.395 0 .643-.248.643-.643v-.94c0-.42-.147-.57-.518-.716l-.47-.174c-.519-.198-.692-.47-.692-1.013V3.884c0-.545.173-.816.692-1.013l.47-.174c.371-.147.518-.296.518-.716v-.94c-.002-.397-.248-.644-.643-.644ZM115.834.47c-.164-.285-.321-.47-.692-.47h-.492c-.272 0-.424.063-.629.224-.224.171-.418.171-.903.171h-9.207c-.395 0-.643.249-.643.644v.94c0 .42.147.569.518.716l.47.174c.519.198.693.47.693 1.013v10.333c0 .545-.174.816-.693 1.013l-.47.174c-.371.147-.518.296-.518.716v.94c0 .395.248.644.643.644h7.467c.42 0 .644-.249.644-.644v-.94c0-.42-.123-.617-.519-.716l-.815-.222c-.545-.148-.692-.42-.692-.965V9.864c0-.174.123-.297.297-.297h.419c1.929 0 3.115.989 4.326 2.399.173.198.395.272.692.123l.617-.32c.273-.148.373-.387.248-.644l-1.915-3.932c-.11-.226-.247-.36-.53-.36h-.304c-.209 0-.341.056-.532.208a1.016 1.016 0 0 1-.643.228h-2.378a.285.285 0 0 1-.297-.297V3.81c0-.89.347-1.237 1.285-1.237 1.608 0 3.807 1.41 5.092 2.696.222.222.495.272.791.098l.668-.42c.222-.147.373-.382.222-.643L115.834.47ZM96.514 15.626l-.57-.198c-.518-.174-.691-.47-.691-1.013V3.662c0-.545.173-.817.692-1.013l.47-.174c.371-.147.518-.296.518-.716v-.716c0-.396-.222-.644-.643-.644h-4.747c-.396 0-.644.248-.644.644v.716c0 .42.15.569.519.716l.47.174c.518.197.692.47.692 1.013v6.056a.184.184 0 0 1-.326.118L85.944.992c-.157-.238-.318-.397-.482-.475-.164-.079-.392-.118-.679-.118h-4.71c-.395 0-.643.248-.643.644v.94c0 .42.149.569.518.716l.47.174c.519.197.692.47.692 1.012V14.44c0 .545-.173.815-.692 1.013l-.47.174c-.371.147-.518.296-.518.716v.716c0 .395.248.644.643.644h4.747c.42 0 .644-.249.644-.644v-.716c0-.42-.147-.57-.519-.716l-.47-.174c-.518-.198-.692-.47-.692-1.013V7.623a.184.184 0 0 1 .327-.117l6.987 9.602c.157.24.317.398.481.476.164.078.392.118.68.118h4.13c.42 0 .644-.249.644-.644v-.716c0-.42-.147-.593-.518-.716ZM28.06 8.802 23.47.854a.633.633 0 0 0-.547-.317h-9.181a.633.633 0 0 0-.549.317L9.25 7.685a.285.285 0 0 1-.317.13.283.283 0 0 1-.21-.272V4.9A4.366 4.366 0 0 0 4.364.54H.634A.635.635 0 0 0 0 1.172v3.729a4.278 4.278 0 0 0 2.64 3.962.28.28 0 0 1 0 .518A4.263 4.263 0 0 0 0 13.34v3.728c0 .35.284.635.634.635h3.729a4.366 4.366 0 0 0 4.36-4.361v-2.643c0-.127.087-.24.21-.273a.287.287 0 0 1 .317.13l3.943 6.831a.635.635 0 0 0 .549.317h9.179a.633.633 0 0 0 .548-.317l4.589-7.948a.628.628 0 0 0 .084-.315.619.619 0 0 0-.082-.32Zm-9.659 3.65c-1.79 0-3.247-1.495-3.247-3.333 0-1.837 1.456-3.333 3.247-3.333 1.79 0 3.247 1.496 3.247 3.333 0 1.838-1.456 3.334-3.247 3.334Z"
        fill={
          colorMode === 'dark' ? NAMED_COLORS.WHITE : NAMED_COLORS.DEEP_BLUE
        }
      />
    </Icon>
  )
}

export default IronFishLogo