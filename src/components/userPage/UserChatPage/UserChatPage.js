const UserChatPage = () => {

    const aa = () => "<p>hola</p>"
    const b = "<FONT SIZE=1><SPAN LANG=\"ES-MODERN\"><B><P>Color: </B>Tricolor </P><B><P>Tipo: </B>Tinta (Ink-jet)  Remanufacturado </P><B><P>Capacidad: </B>12 ml</P><P>10N0026E/10NX227E</P><B><P>Compatible con:</P></B><P>Color JetPrinter i3 X 1100 X 1110 X 1130 X 1140 X 1150 X 1155 X 1160 X 1170 X 1180 X 1182 X 1185 X 1190 X 1195 X 1210 X 1250 X 1270 X 1290 X 2200 Series X 2230 X 2240 X 2250 X 72 X 74 X 75 PrinTrio Z 13 Z 23e Z 24 Z 25 Z 27 Z 33 Z 34 Z 35 Z 378 Z 510 series Z 511 Z 513 Z 515 Z 517 Z 600 Z 601 Z 602 Z 604 Z 605 Z 610 Z 611 Z 612 Z 615 Z 617 Z 640 Z 645 Z 647 DELL A 920 DELL 720. </P></FONT></SPAN>"
    const c = [b.toLowerCase()]
    return (
        <div className="UserChatPage">
            CHAT DE USUARIO
            <div dangerouslySetInnerHTML={{ __html: b.toLowerCase() }}></div>
        </div >
    )
}

export default UserChatPage