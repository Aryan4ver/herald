import React from 'react';
import ReactDOM from 'react-dom';
const { render } = ReactDOM;

/*.masonry-container{
	width: 80%;
	margin: auto;
	margin-top: 10px;
	border: 1px solid rgba(0,0,0,.1);
	p{
		text-align: center;
		padding: 4px;
		font-family: monospace;
		background: #222;
		color: #efefef;
	}
}
.masonry{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: stretch;
	width: 100%;
	margin: auto;
}
.column{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: stretch;
	flex-grow: 1;
}
.tile{
	margin: 4px;
	img{
		box-shadow: 0 1px 1px 2px rgba(0,0,0, .15);
		border-radius: 10px;
		width: 100%;
	}
}*/

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}

class App extends React.Component{
	render(){
		return (
			<div className="container">
				<div className="masonry-container">
					<p>ReactJS Responsive/Modular Masonry Grid.</p>
					<Masonry brakePoints={this.props.brakePoints}>
						{this.props.images.map((image, id) => {
							return (
								<Tile src={image} />
							) 
						})}
					</Masonry>
				</div>
			</div>
		)
	}
}

const Tile = ({src}) => {
  return (
    <div className="tile">
			<img src={src} />
		</div>
  );
};

class Masonry extends React.Component{
	constructor(props){
		super(props);
		this.state = {columns: 1};
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
	}
	
	getColumns(w){
		return this.props.brakePoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.brakePoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return <div key={i} >{ci}{child}</div>
							})}
						</div>
					)
				})}
			</div>
		)
	}
}


render(<App images = {images} brakePoints={brakePoints} />, app);