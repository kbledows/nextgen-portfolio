"use client";
import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import pong from 'public/pong.avif'
import { useEffect } from 'react';



const Pong = () => {
    let p1Score = 0
    let p2Score = 0
    let serve = 0
    useEffect(() => {
        const p1Button = document.querySelector("#p1Btn")
        const p2Button = document.querySelector("#p2Btn")
        const p1Display = document.querySelector("#p1Score")
        const p2Display = document.querySelector("#p2Score")
        const resetBtn = document.querySelector("#resetBtn")
        const serve_display = document.querySelector("#serve_display")
        p1Button.addEventListener("click", function () {
            p1Score += 1;
            if ((p1Score + p2Score) % 2 === 0) {
                if (serve === 0) {
                    serve_display.textContent = "Player 1";
                    serve += 1;
                }
                else {
                    serve_display.textContent = "Player 2";
                    serve -= 1;
                }
            }
            p1Display.textContent = p1Score
            if (p1Score >= 11) {
                if (p1Score - p2Score >= 2) {
                    p1Score = 0;
                    p2Score = 0;
                    p1Display.textContent = p1Score
                    p2Display.textContent = p2Score
                    serve = 0;
                    serve_display.textContent = "Player 1";
                    alert("Player 1 wins!")
                }
            }
        })
        p2Button.addEventListener("click", function () {
            p2Score += 1;
            if ((p1Score + p2Score) % 2 === 0) {
                if (serve === 0) {
                    serve_display.textContent = "Player 1";
                    serve += 1;
                }
                else {
                    serve_display.textContent = "Player 2";
                    serve -= 1;
                }
            }
            p2Display.textContent = p2Score
            if (p2Score >= 11) {
                if (p2Score - p1Score >= 2) {
                    p1Score = 0;
                    p2Score = 0;
                    p1Display.textContent = p1Score
                    p2Display.textContent = p2Score
                    serve = 0;
                    serve_display.textContent = "Player 1";
                    alert("Player 2 wins!")
                }
            }
        })

        resetBtn.addEventListener("click", function () {
            p1Score = 0;
            p2Score = 0;
            serve = 0;
            p1Display.textContent = p1Score
            p2Display.textContent = p2Score
            serve_display.textContent = "Player 1";
        })

    })
    return (
        <div className="flex min-h-screen flex-col items-center justify-between pt-20 px-12 lg:p-24 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] lg:max-w-3xl">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={pong} className="w-fill w-48 md:w-64 lg:w-96 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Ping Pong Score Keeper</h2>
                        <h3 className="text-3xl my-4 font-bold"><span className="text-[#780000]" id="p1Score">{p1Score}</span> to <span className="text-[#003049]" id="p2Score">{p2Score}</span></h3>
                        <h3 className="text-xl mb-2 font-bold text-slate-700">Serving: <span id="serve_display" className="text-[#780000]">Player 1</span></h3>
                        <div>
                            <button id="resetBtn" className="btn bg-[#344E41] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:bg-[#dad7cd]">Reset Score</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-row content-center justify-between">
                <button id="p1Btn" className="btn bg-[#780000] text-[#DAD7CD] hover:bg-[#c1121f] mx-0.5 md:mx-5 lg:mx-5">+1 Player One</button>
                <button id="p2Btn" className="btn bg-[#003049] text-[#DAD7CD] hover:bg-[#0077b6] mx-0.5 md:mx-5 lg:mx-5">+2 Player One</button>
            </div>
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center pb-1">Instructions</h2>
                        <p>In order to keep track of the score in ping pong, I created this useful tool. Simply use the buttons to increment each players score.</p>
                        <br></br>
                        <p>To reset the score, press the reset button. Use the dropdown to select the score you wish to play to. Finally, serving player will be highlighted in red!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pong;