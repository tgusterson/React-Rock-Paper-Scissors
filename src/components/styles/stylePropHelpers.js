import { paperBgFrom, paperBgTo, rockBgFrom, rockBgTo, scissorsBgFrom, scissorsBgTo, paperShadow, rockShadow, scissorsShadow } from './theme';
import rockSVG from './assets/icon-rock.svg';
import paperSVG from './assets/icon-paper.svg';
import scissorsSVG from './assets/icon-scissors.svg';

export const chooseUserStyleProps = (state) => {
  if (state.userPick === 'paper') {
    return {
      position: 'left',
      fromColor: paperBgFrom,
      toColor: paperBgTo,
      shadow: paperShadow
    }
  } else if (state.userPick === 'scissors') {
    return {
      position: 'left',
      fromColor: scissorsBgFrom,
      toColor: scissorsBgTo,
      shadow: scissorsShadow
    }
  } else if (state.userPick === 'rock') {
    return {
      position: 'left',
      fromColor: rockBgFrom,
      toColor: rockBgTo,
      shadow: rockShadow
    }
  }
};

export const chooseUserIcon = (state) => {
  if (state.userPick === 'paper') {
    return paperSVG
  } else if (state.userPick === 'scissors') {
    return scissorsSVG
  } else if (state.userPick === 'rock') {
    return rockSVG
  }
};

export const chooseComputerStyleProps = (state) => {
  if (state.computerPick === 'paper') {
    return {
      position: 'right',
      fromColor: paperBgFrom,
      toColor: paperBgTo,
      shadow: paperShadow
    }
  } else if (state.computerPick === 'scissors') {
    return {
      position: 'right',
      fromColor: scissorsBgFrom,
      toColor: scissorsBgTo,
      shadow: scissorsShadow
    }
  } else if (state.computerPick === 'rock') {
    return {
      position: 'right',
      fromColor: rockBgFrom,
      toColor: rockBgTo,
      shadow: rockShadow
    }
  }
};

export const chooseComputerIcon = (state) => {
  if (state.computerPick === 'paper') {
    return paperSVG
  } else if (state.computerPick === 'scissors') {
    return scissorsSVG
  } else if (state.computerPick === 'rock') {
    return rockSVG
  }
};