import React from 'react'
import PropTypes from 'prop-types'
import StyledFileCard, { FileIcon, FileName, FileSize, Options, Time } from './style';
import { ReactComponent as FileZip} from 'assets/icon/fileZip.svg'
import { ReactComponent as FileExcel} from 'assets/icon/fileExcel.svg'
import { ReactComponent as FileWord} from 'assets/icon/fileWord.svg'
import { ReactComponent as FilePpt} from 'assets/icon/filePpt.svg'
import { ReactComponent as FileImage} from 'assets/icon/fileImage.svg'
import { ReactComponent as FilePdf} from 'assets/icon/filePdf.svg'
import { ReactComponent as OptionsIcon} from 'assets/icon/options.svg'
import Icon from 'components/Icon';
const fileIcons = {
    zip: FileZip,
    image: FileImage,
    pdf: FilePdf,
    word: FileWord,
    excel: FileExcel,
    ppt: FilePpt,
}

function FileCard({children, ...rest}) {
    return (
        <StyledFileCard {...rest}>
            <FileIcon icon={fileIcons.zip}/>
            <FileName>小黄片</FileName>
            <FileSize>1G</FileSize>
            <Options>
                <Icon icon={OptionsIcon} opacity={0.3}/>
            </Options>
            <Time>2021年02月14日</Time>
        </StyledFileCard>
    );
}

FileCard.propTypes = {
    children: PropTypes.any
};

export default FileCard;

