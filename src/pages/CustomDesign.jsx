import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { FiType, FiImage } from 'react-icons/fi';

const TShirtDesigner = () => {

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [tshirtColor, setTshirtColor] = useState('white');

    useEffect(() => {
        // Canvas Aria
        const fabricCanvas = new fabric.Canvas(canvasRef.current, {
            width: 200,
            height: 250,
            border: "dotted"
        });

        setCanvas(fabricCanvas);

        // Clean up on unmount
        return () => {
            fabricCanvas.dispose();
        };
    }, []);


    // const fontFamilyNames = ["Arial", "Helvetica", "sans-serif", "Gill Sans", "sans-serif", "serif", "cursive", "system-ui", "Pacifico", "Satisfy", "Anton"];
    // const fontStyleNames = ["normal", "Bold", "itelic", "oblique"];


    // this method for add text in desiner canvas
    const addText = () => {
        var text = new fabric.Text('Abhishek Sharma', {
            fontFamily: 'Comic Sans',
            width: 200,
            height: 100,
            top: 20,
            left: 20,
            transparentCorners: false,
            cornerColor: 'blue',
            cornerStrokeColor: 'red',
            borderColor: 'red',
            cornerSize: 12,
            padding: 10,
            cornerStyle: 'circle',
            borderDashArray: [3, 3],
            fontSize: 18,
            fill: "block"

        });
        canvas.add(text);
    };


    // this method for adding images in canvas designing
    const addImg = () => {
        fabric.Image.fromURL('https://via.placeholder.com/150', (img) => {
            canvas.add(img);
            img.set({
                left: 20,
                top: 20,
                transparentCorners: false,
                cornerColor: 'blue',
                cornerStrokeColor: 'red',
                borderColor: 'red',
                cornerSize: 12,
                padding: 10,
                cornerStyle: 'circle',
                borderDashArray: [3, 3],
            });
            canvas.renderAll();
        });
    }

    // delete selected object's 
    const deleteObject = (eventData, transform) => {
        const target = transform.target;
        canvas.remove(target);
        canvas.requestRenderAll();
    };

    // Load delete icon image
    const deleteImg = new Image();
    deleteImg.src = 'https://img.icons8.com/?size=256&id=63688&format=png';
    deleteImg.onload = () => {
        canvas.renderAll(null);
    };

    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: 0.5,
        offsetX: 0,
        cursorStyle: 'pointer',
        mouseUpHandler: deleteObject,
        render: (ctx, right, top, styleOverride, fabricObject) => {
            const size = 20;
            ctx.save();
            ctx.translate(right, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(deleteImg, -size / 2, -size / 2, size, size);
            ctx.restore();
        },
        cornerSize: 20,
    })
    // ##############################################


    const changeColor = (color) => {
        setTshirtColor(color);
    };

    return (
        <div className="flex flex-col items-center p-8 space-y-8">
            <div>
                <div
                    className={`relative w-96 h-96 border-[5px] ${'bg-black' ? "text-white" : "text-black"} border-2 flex justify-center items-center`}
                    style={{ backgroundColor: tshirtColor }}>

                    <div className='border-2 border-dotted border-black'>
                        <canvas ref={canvasRef} />
                    </div>
                </div>

                <div className="flex space-x-4 border-2 justify-center h-10">
                    <button className="px-4 py-2 bg-white rounded" onClick={() => changeColor('white')}></button>
                    <button className="px-4 py-2 bg-black text-white border rounded" onClick={() => changeColor('black')}></button>
                    <button className="px-4 py-2 bg-red-500 text-white border rounded" onClick={() => changeColor('red')}></button>
                    <button className="px-4 py-2 bg-blue-500 text-white border rounded" onClick={() => changeColor('blue')}></button>
                    <button className="px-4 py-2 bg-green-500 text-white border rounded" onClick={() => changeColor('green')}></button>
                </div>
            </div>

            <div>
                <div className='flex gap-10'>
                    <button className="px-4 py-2 bg-green-500 text-white border rounded transition-all duration-150 scale-105" onClick={addText}><FiType size={32} /></button>
                    <button className="px-4 py-2 bg-green-500 text-white border rounded transition-all duration-150 scale-105" onClick={addImg}><FiImage size={32} /></button>
                </div>
            </div>
            {/* <div >
                <div>
                    <span>Font Name :</span>
                    <select id="dropdown" name="dropdown">
                        {fontFamilyNames.map((font, index) => (
                            <option key={index} value={font} className={`font-[${font}]`}>{font}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <span>font style:</span>
                    <select id="dropdown" name="dropdown">
                        {fontStyleNames.map((font) => (
                            <option key={font} value={font} className={`font-[${font}]`}>{font}</option>
                        ))}
                    </select>
                </div>


                <div>
                    <span>font size:</span>
                    <input type='number' name='fontSizeNum' min={1} max={100}  />
                </div>
            </div> */}
        </div >
    );
};

export default TShirtDesigner;
