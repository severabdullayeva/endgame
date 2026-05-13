import { useState, useRef } from "react";
import { Chess } from "chess.js";

const useChessGame = () => {

  //  (oyunun real logic-i burada işləyir)
  // useRef istifadə edirik ki, hər renderdə yenilənməsin
  const gameRef = useRef(new Chess());

  //  Board-in FEN stringi (chess board vəziyyəti)
  const [fen, setFen] = useState(gameRef.current.fen());

  //  Oyun gedişləri (move history list)
  const [history, setHistory] = useState([]);

  //  Kim oynayır: "w" = white, "b" = black
  const [turn, setTurn] = useState(gameRef.current.turn());

  //  Check vəziyyəti (şah təhlükədədirsə true)
  const [isCheck, setIsCheck] = useState(false);

  //  Checkmate 
  const [isCheckmate, setIsCheckmate] = useState(false);

  //  heç-heçə vəziyyəti
  const [isDraw, setIsDraw] = useState(false);

  //  Oyunu sıfırlamaq 
  const resetGame = () => {
    gameRef.current.reset(); // chess.js reset

    setFen(gameRef.current.fen()); // board reset
    setHistory([]);                // move list silinir
    setTurn(gameRef.current.turn()); // kim başlayır reset

    setIsCheck(false);             // statuslar sıfırlanır
    setIsCheckmate(false);
    setIsDraw(false);
  };

  //  hər move-dan sonra state-ləri update edir
  const update = () => {
    setFen(gameRef.current.fen());            // board 
    setHistory(gameRef.current.history());    // gedişlər 
    setTurn(gameRef.current.turn());          // sıra 
    setIsCheck(gameRef.current.in_check());   // check yoxla
    setIsCheckmate(gameRef.current.in_checkmate()); // mat yoxla
    setIsDraw(gameRef.current.in_draw());     // draw yoxla
  };

  //  move etmək funksiyası
  const makeMove = (from, to) => {

    // chess.js  gediş etməyə çalışıldı
    const move = gameRef.current.move({
      from,
      to,
      promotion: "q", // queen default
    });

    //  əgər move səhvdirsə 
    if (!move) return false;

    //  move uğurlu olduqda UI update olunur
    update();
    return true;
  };

  //  componentlərə göndərilən data və funksiyalar
  return {
    position: fen,        // FEN
    history,              // move list
    makeMove,             // move funksiyası

    currentTurn: turn,    // kim oynyır
    isCheck,              // check 
    isCheckmate,          // mat 
    isDraw,               // draw 
    resetGame,            // game reset
  };
};

export default useChessGame;