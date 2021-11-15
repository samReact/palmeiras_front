import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Context } from '../store/appReducer'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function History() {
  const [state] = useContext(Context)
  const { productionHistory } = state

  const { t } = useTranslation()

  return (
    <TableContainer data-testid="history-page" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('Product')}</StyledTableCell>
            <StyledTableCell align="right">{t('Quantity')}</StyledTableCell>
            <StyledTableCell align="right">{t('Staff Nbr')}</StyledTableCell>
            <StyledTableCell align="right">
              {t('Production date')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productionHistory.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.product}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
              <StyledTableCell align="right">{row.staff}</StyledTableCell>
              <StyledTableCell align="right">
                {row.date.toLocaleString()}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
