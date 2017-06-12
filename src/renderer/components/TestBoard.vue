<template>
	<v-container fluid>
		<v-card>
			Test board
			<div id="board1" style="width: 400px"></div>
		</v-card>
	</v-container>
</template>

<script>

/* var Chess = require('chess.js').Chess
var chess = new Chess()

while (!chess.game_over()) {
	var moves = chess.moves()
	var move = moves[Math.floor(Math.random() * moves.length)]
	chess.move(move)
}
console.log(chess.pgn()) */

export default {
	name: 'testboard',
	data () {
		return {

		}
	},
	mounted () {
		var jquery = require('jquery')
		var ChessBoard = require('chessboardjs')
		var board = ChessBoard('board1')
	}
}
</script>

<style>
</style>
