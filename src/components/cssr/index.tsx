import React, { PropsWithChildren } from 'react';
// import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import { ICssrProps } from './types';
// import { directionalWrappers } from './directional-wrappers';
// import { utilityClasses } from './utility-classes';
// import { justifyContent } from './justify-content';
// import { height } from './height';

// const Root = styled.div<ICssrProps>`
// 	${ directionalWrappers };
// 	${ height };
// 	${ justifyContent }
// 	${ utilityClasses };
// `;

export function Cssr({ children, ...otherProps }: PropsWithChildren<ICssrProps>) {
	// return (
	// 	<Root { ...otherProps }>
	// 		{ children }
	// 	</Root>
	// );

	const {
		baseWrapper,
		direction,
		height,
		justify,
		background,
		center,
		flexDirection,
		flexWrap,
		padding
	} = otherProps;

	return (
		<ClassNames>
			{
				({ cx }) => (
					<div className={ cx(
						'cssr',

						/* =========================================================
						   parent containers
						   ========================================================= */
						{ [`${ baseWrapper === 'flex' ? 'if' : 'block' }__base-wrapper`]: !!baseWrapper },

						/* =========================================================
						   directional wrappers
						   ========================================================= */
						{ [`${ direction }-inline-flex`]: !!direction },

						/* =========================================================
						   height
						   ========================================================= */
						{ [`min-h-${ height }`]: !!height },

						/* =========================================================
						   justify-content
						   ========================================================= */
						{ [`justify--${ justify }`]: !!justify },

						/* ==========================================================================
						   utility classes
						   ========================================================================== */
						{ [`bg-${ background }`]: !!background },

						/* =========================================================
						   center align content
						   ========================================================= */
						{ [`${ center }__mid-container`]: !!center },

						/* =========================================================
						   flex-flow
						   ========================================================= */
						{ [`direction--${ flexDirection }`]: !!flexDirection },
						{ [`wrap--${ flexWrap }`]: !!flexWrap },

						/* =========================================================
						   padding
						   ========================================================= */
						{ [`pad-${ padding }`]: !!padding },
					) }>
						{ children }
					</div>
				)
			}
		</ClassNames>

	);
}