import { useState, useCallback, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Grid';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import type { UserProps } from '../user-table-row';
import { SummaryStatCard } from 'src/components/cards/SummaryStatCard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditAttendeeModal from '../EditAttendeeModal';
import type { Attendee } from '../EditAttendeeModal';
import ManualAddAttendeeModal from '../ManualAddAttendeeModal';
import AddIcon from '@mui/icons-material/Add';
import type { ManualAddAttendee } from '../ManualAddAttendeeModal';

// ----------------------------------------------------------------------

// Mock data for demonstration (replace with real data source as needed)
const activeMembers = [
  {
    firstName: 'Jason',
    lastName: 'Hunt',
    voicePart: 'Low',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 8,
    attendedAll: 100,
    email: 'JH@yaya.com',
    appStatus: 'active',
  },
  {
    firstName: 'Makele',
    lastName: 'Briant',
    voicePart: 'High',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 0,
    attendedAll: 5,
    email: 'MB@yaya.com',
    appStatus: 'deactivated',
  },
  {
    firstName: 'Sophie',
    lastName: 'Clayton',
    voicePart: 'High',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 0,
    attendedAll: 70,
    email: 'SC@yaya.com',
    appStatus: 'active',
  },
];

const deactivatedMembers = [
  {
    firstName: 'Chris',
    lastName: 'Fort',
    voicePart: 'Low',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 1,
    attendedAll: 8,
    email: 'CF@yaya.com',
    appStatus: 'active',
    leaverNotes: 'Lorem ipsum dolor sit amet.',
  },
  {
    firstName: 'Ben',
    lastName: 'Wall',
    voicePart: 'High',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 0,
    attendedAll: 0,
    email: 'BW@yaya.com',
    appStatus: 'deactivated',
    leaverNotes: 'Lorem ipsum dolor sit amet.',
  },
  {
    firstName: 'John',
    lastName: '',
    voicePart: 'High',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 0,
    attendedAll: 0,
    email: 'JS@yaya.com',
    appStatus: 'active',
    leaverNotes: 'Lorem ipsum dolor sit amet.',
  },
  {
    firstName: 'Jaan',
    lastName: '',
    voicePart: 'Low',
    singerNotes: 'Lorem ipsum dolor sit amet.',
    attendedTerm: 0,
    attendedAll: 0,
    email: 'JS@yaya.com',
    appStatus: 'active',
    leaverNotes: 'Lorem ipsum dolor sit amet.',
  },
];

export function UserView() {
  const navigate = useNavigate();
  const table = useTable();

  const [filterName, setFilterName] = useState('');
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editAttendee, setEditAttendee] = useState<Attendee | undefined>(undefined);
  const [openManualAddModal, setOpenManualAddModal] = useState(false);

  const dataFiltered: UserProps[] = applyFilter({
    inputData: _users,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  // Handler for Manual Add button (modal logic to be implemented)
  const handleManualAdd = () => {
    setOpenManualAddModal(true);
  };

  const handleEditClick = (attendee: Attendee) => {
    setEditAttendee(attendee);
    setOpenEditModal(true);
  };
  const handleEditClose = () => {
    setOpenEditModal(false);
    setEditAttendee(undefined);
  };
  const handleEditSave = (updated: Attendee) => {
    setOpenEditModal(false);
    setEditAttendee(undefined);
    // Optionally update data here
  };

  const handleManualAddClose = () => {
    setOpenManualAddModal(false);
  };

  const handleManualAddSave = (attendee: ManualAddAttendee) => {
    setOpenManualAddModal(false);
    // Optionally add attendee to the list here
  };

  return (
    <DashboardContent sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 32, right: 48, zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span style={{ fontWeight: 500, color: '#232b2b', fontSize: 18, marginRight: 8 }}>Invite Members</span>
          <IconButton
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e05fd6 0%, #d064dd 100%)',
              color: '#fff',
              boxShadow: '0px 2px 8px #d064dd33',
              fontSize: 28,
              '&:hover': {
                background: 'linear-gradient(135deg, #d064dd 0%, #b94fc6 100%)',
              },
            }}
          >
            <AddIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          onClick={() => navigate('/attendance')}
          sx={{
            borderRadius: 99,
            background: 'linear-gradient(90deg, #d064dd 60%, #ff5fd2 100%)',
            color: '#fff',
            fontWeight: 600,
            px: 4,
            py: 1.2,
            textTransform: 'none',
            boxShadow: '0px 2px 8px #d064dd33',
            fontSize: 18,
            minWidth: 180,
            '&:hover': {
              background: 'linear-gradient(90deg, #b94fc6 60%, #ff5fd2 100%)',
            },
          }}
        >
          Attendance
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
          <SummaryStatCard
            title="Total Members"
            total={75}
            subtitle="56 Active"
            valueColor="#00CFE8"
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
      </Grid>

      {/* Active Members Card */}
      <Card sx={{mt: 8, mb: 4, borderRadius: 4, boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', background: '#FAFAF9', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 18, right: 32, zIndex: 3, transform: 'translateY(-50%)' }}>
          <Button
            variant="contained"
            onClick={handleManualAdd}
            sx={{
              borderRadius: 99,
              background: '#fff',
              color: '#232b2b',
              fontWeight: 500,
              fontSize: 16,
              px: 3,
              py: 0.5,
              boxShadow: '0px 2px 8px #d064dd22',
              textTransform: 'none',
              border: 'none',
              minWidth: 120,
              '&:hover': {
                background: '#f3e6fa',
                color: '#d064dd',
              },
            }}
          >
            Manual Add
          </Button>
        </Box>
        <Box sx={{ p: 2, pb: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Active Members</Typography>
        </Box>
        <Box sx={{ overflowX: 'auto', width: '100%' }}>
          <TableContainer sx={{ minWidth: 1200 }}>
            <Table sx={{ minWidth: 1200 }}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, border: 0, color: 'text.primary', py: 2, px: 2, minWidth: 120 }}>
                    First Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Voice Part</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 200 }}>Singer Notes <Typography variant="caption" color="text.secondary">(private)</Typography></TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Attended <Typography variant="caption" color="text.secondary">(this term)</Typography></TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Attended <Typography variant="caption" color="text.secondary">(all time)</Typography></TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 180 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#F8EFFF', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', borderTopRightRadius: 24, borderBottomRightRadius: 24, minWidth: 200 }}>App Status</TableCell>
                </TableRow>
                {activeMembers.map((member, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ py: 2, px: 2, border: 0, borderLeft: 0, display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleEditClick(member)}
                        sx={{ color: '#757575', p: 0.5, mr: 1, '&:hover': { color: '#d064dd', background: 'transparent' } }}
                      >
                        <EditOutlinedIcon fontSize="small" />
                      </IconButton>
                      {member.firstName}
                    </TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.lastName}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.voicePart}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 200 }}>{member.singerNotes}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.attendedTerm}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.attendedAll}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 180 }}>{member.email}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 200, display: 'flex', gap: 1 }}>
                      <Button
                        variant={member.appStatus === 'active' ? 'contained' : 'outlined'}
                        size="small"
                        sx={{
                          borderRadius: 99,
                          textTransform: 'none',
                          fontWeight: 500,
                          background: member.appStatus === 'active' ? '#E1BEE7' : '#fff',
                          color: member.appStatus === 'active' ? '#d064dd' : '#888',
                          boxShadow: 'none',
                          minWidth: 80,
                          border: member.appStatus === 'active' ? 'none' : '1px solid #E1BEE7',
                          '&:hover': {
                            background: member.appStatus === 'active' ? '#D1B3E0' : '#f3e6fa',
                            border: member.appStatus === 'active' ? 'none' : '1px solid #E1BEE7',
                          },
                        }}
                      >
                        Active
                      </Button>
                      <Button
                        variant={member.appStatus === 'deactivated' ? 'contained' : 'outlined'}
                        size="small"
                        sx={{
                          borderRadius: 99,
                          textTransform: 'none',
                          fontWeight: 500,
                          background: member.appStatus === 'deactivated' ? '#222' : '#fff',
                          color: member.appStatus === 'deactivated' ? '#fff' : '#888',
                          boxShadow: 'none',
                          minWidth: 80,
                          border: member.appStatus === 'deactivated' ? 'none' : '1px solid #E1BEE7',
                          '&:hover': {
                            background: member.appStatus === 'deactivated' ? '#444' : '#f3e6fa',
                            border: member.appStatus === 'deactivated' ? 'none' : '1px solid #E1BEE7',
                          },
                        }}
                      >
                        Deactivate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>

      {/* De-activated Members Card */}
      <Card sx={{ borderRadius: 4, boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', background: '#FAFAF9' }}>
        <Box sx={{ p: 2, pb: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>De-activated Members</Typography>
        </Box>
        <Box sx={{ overflowX: 'auto', width: '100%' }}>
          <TableContainer sx={{ minWidth: 1400 }}>
            <Table sx={{ minWidth: 1400 }}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, border: 0, color: 'text.primary', py: 2, px: 2, minWidth: 120 }}>
                    First Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Voice Part</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 200 }}>Singer Notes <Typography variant="caption" color="text.secondary">(private)</Typography></TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Attended <Typography variant="caption" color="text.secondary">(this term)</Typography></TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>Attended <Typography variant="caption" color="text.secondary">(all time)</Typography></TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 180 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', minWidth: 200 }}>App Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, background: '#BDBDBD', border: 0, color: 'text.primary', borderLeft: '2px dotted #E1BEE7', borderTopRightRadius: 24, borderBottomRightRadius: 24, minWidth: 200 }}>Leaver Notes</TableCell>
                </TableRow>
                {deactivatedMembers.map((member, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ py: 2, px: 2, border: 0, borderLeft: 0, display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleEditClick(member)}
                        sx={{ color: '#757575', p: 0.5, mr: 1, '&:hover': { color: '#d064dd', background: 'transparent' } }}
                      >
                        <EditOutlinedIcon fontSize="small" />
                      </IconButton>
                      {member.firstName}
                    </TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.lastName}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.voicePart}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 200 }}>{member.singerNotes}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.attendedTerm}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 120 }}>{member.attendedAll}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 180 }}>{member.email}</TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 200, display: 'flex', gap: 1 }}>
                      <Button
                        variant={member.appStatus === 'active' ? 'contained' : 'outlined'}
                        size="small"
                        sx={{
                          borderRadius: 99,
                          textTransform: 'none',
                          fontWeight: 500,
                          background: member.appStatus === 'active' ? '#E1BEE7' : '#fff',
                          color: member.appStatus === 'active' ? '#d064dd' : '#888',
                          boxShadow: 'none',
                          minWidth: 80,
                          border: member.appStatus === 'active' ? 'none' : '1px solid #E1BEE7',
                          '&:hover': {
                            background: member.appStatus === 'active' ? '#D1B3E0' : '#f3e6fa',
                            border: member.appStatus === 'active' ? 'none' : '1px solid #E1BEE7',
                          },
                        }}
                      >
                        Active
                      </Button>
                      <Button
                        variant={member.appStatus === 'deactivated' ? 'contained' : 'outlined'}
                        size="small"
                        sx={{
                          borderRadius: 99,
                          textTransform: 'none',
                          fontWeight: 500,
                          background: member.appStatus === 'deactivated' ? '#222' : '#fff',
                          color: member.appStatus === 'deactivated' ? '#fff' : '#888',
                          boxShadow: 'none',
                          minWidth: 80,
                          border: member.appStatus === 'deactivated' ? 'none' : '1px solid #E1BEE7',
                          '&:hover': {
                            background: member.appStatus === 'deactivated' ? '#444' : '#f3e6fa',
                            border: member.appStatus === 'deactivated' ? 'none' : '1px solid #E1BEE7',
                          },
                        }}
                      >
                        Deactivate
                      </Button>
                    </TableCell>
                    <TableCell sx={{ border: 0, borderLeft: '2px dotted #E1BEE7', minWidth: 200 }}>{member.leaverNotes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>

      <EditAttendeeModal
        open={openEditModal}
        onClose={handleEditClose}
        attendee={editAttendee}
        onSave={handleEditSave}
      />

      <ManualAddAttendeeModal
        open={openManualAddModal}
        onClose={handleManualAddClose}
        onAdd={handleManualAddSave}
      />
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
