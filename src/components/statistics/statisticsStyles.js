import styled from 'styled-components';

export default {
	Stat: styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 20px;
		margin: 0 auto;
		width: 400px;
		list-style: none;
		border: solid 1px;
		border-radius: 4px;
		background-color: rgb(255, 255, 255);
	`,
	StatTitle: styled.h2`
		font-size: 26px;
		font-family: 'ProximaNova';
		color: rgb(0, 0, 0);
		line-height: 1.2;
		margin-bottom: 30px;
	`,
	StatLabel: styled.span`
		text-align: center;
		font-size: 18px;
		font-family: 'ProximaNova';
		color: rgb(255, 255, 255);
		line-height: 1.111;
	`,
	StatPercentage: styled.span`
		font-size: 26px;
		text-align: center;
		font-family: 'ProximaNova';
		color: rgb(255, 255, 255);
		line-height: 1.667;
	`,
	StatList: styled.ul`
		display: flex;
		justify-content: space-between;
		width: 100%;
	`,
	StatItem: styled.li`
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 80px;
		background-color: ${({ rgb }) => rgb};
	`
};