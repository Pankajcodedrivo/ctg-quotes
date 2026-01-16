import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import plus from "../assets/images/plus-wh.svg"
import arrow from "../assets/images/long-arrow.svg"
import {saveSingleDoc, saveMultipleDoc, getMyDocuments} from '../service/document.api';
import toast from "react-hot-toast";
import { useEffect } from "react";

type DecRow = {
  id: number;
  type: string;
  name: string;
  file: File | null;
  decURL?: string;
};

type loeRow = {
  id: number;
  name: string;
  file: File | null;
  loeURL?: string;
};

const MyDocuments = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const [dlFile, setDlFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const [existingDL, setExistingDL] = useState<string | null>(null);

    const [decRows, setDecRows] = useState<DecRow[]>([
    { id: Date.now(), type: '', name: '', file: null },
    ]);

    const [loeRows, setLoeRows] = useState<loeRow[]>([
    { id: Date.now(), name: '', file: null },
    ]);

// Get existing dec documents
    const loadDocs = async () => {
        try {
        const res = await getMyDocuments();
        // DEC
        setDecRows(
            res.data.decDoc.map((d: any) => ({
                id: Date.now() + Math.random(),
                type: d.decType || '',
                name: d.decName || '',
                file: null,
                decURL: d.decURL,
            }))
        );
        // LOE
        setLoeRows(
            res.data.loeDoc.map((l: any) => ({
                id: Date.now() + Math.random(),
                name: l.loeName || '',
                file: null,
                loeURL: l.loeURL,
            }))
        );
        // DL
        if (res?.data?.dlDocURL) {
            setExistingDL(res.data.dlDocURL);
        }
        } catch {
            toast.error('Failed to load documents');
        }
    };
    useEffect(() => {
        loadDocs();
    }, []);

    // Add row loe
    const updateLoeRow = (id: number, key: keyof loeRow, value: any) => {
        setLoeRows(rows =>
            rows.map(row =>
            row.id === id ? { ...row, [key]: value } : row
            )
        );
    };
    const addLoeRow = () => {
        setLoeRows(rows => [
            ...rows,
            { id: Date.now(), name: '', file: null },
        ]);
    };
    const removeLoeRow = (id: number) => {
        setLoeRows(rows => rows.filter(row => row.id !== id));
    };

    // Add row dec
    const updateDecRow = (id: number, key: keyof DecRow, value: any) => {
        setDecRows(rows =>
            rows.map(row =>
            row.id === id ? { ...row, [key]: value } : row
            )
        );
    };
    const addDecRow = () => {
        setDecRows(rows => [
            ...rows,
            { id: Date.now(), type: '', name: '', file: null },
        ]);
    };
    const removeDecRow = (id: number) => {
        setDecRows(rows => rows.filter(row => row.id !== id));
    };

    // DL SAVE
    const handleDlFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setDlFile(e.target.files[0]);
        }
    };
    const handleDlSave = async () => {
    if (!dlFile) {
        toast.error('Please upload a driver license file');
        return;
    }
    const formData = new FormData();
    formData.append('file', dlFile);
    try {
        setLoading(true);
        await saveSingleDoc(formData);
        await loadDocs(); 
        setDlFile(null);
    } catch (error) {
        console.log('Upload failed');
    } finally {
        setLoading(false);
    }
};

// DEC SAVE
const handleSaveDecDocuments = async () => {
  const validRows = decRows.filter(
    row => row.file && row.type && row.name
  );

  if (!validRows.length) {
    toast.error('Please add at least one complete document');
    return;
  }
  const formData = new FormData();
  formData.append('docFor', 'DEC');
  validRows.forEach(row => {
    formData.append('files', row.file as File);
    formData.append('types', row.type);
    formData.append('names', row.name);
  });

  try {
    await saveMultipleDoc(formData);
    await loadDocs(); 
    setDecRows([{ id: Date.now(), type: '', name: '', file: null }]);
  } catch (err) {
    toast.error('Upload failed');
  }
};

// LOE SAVE
    const handleSaveLocDocuments = async () => {
    const validRows = loeRows.filter(
        row => row.file && row.name
    );
    if (!validRows.length) {
        toast.error('Please add at least one complete document');
        return;
    }
    const formData = new FormData();
    formData.append('docFor', 'LOE');

    validRows.forEach(row => {
        formData.append('files', row.file as File);
        formData.append('names', row.name);
    });
    try {
        await saveMultipleDoc(formData);
        await loadDocs(); 
        setLoeRows([{ id: Date.now(), name: '', file: null }]);
    } catch (err) {
        toast.error('Upload failed');
    }
    };

    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>My Documents</h3>
                        <p className="font-16">Upload your current Declarations Page to compare apples to apples.</p>
                    </div>
                    <div className="cmn-box h-auto p-40 my-documents mb-4">
                    <div className="row">
                        {decRows.map((row, index) => (
                        <div className="row mb-3" key={row.id}>
                            <div className="col-xl-4 col-md-6">
                            <div className="form-group">
                                <label className="form-label float">Select Type</label>
                                <select
                                className="form-control"
                                value={row.type}
                                onChange={e =>
                                    updateDecRow(row.id, 'type', e.target.value)
                                }
                                >
                                <option value="">Select Type</option>
                                <option value="Auto Insurance">Auto Insurance</option>
                                <option value="Property Insurance">Property Insurance</option>
                                <option value="Renters Insurance">Renters Insurance</option>
                                <option value="Life Insurance">Life Insurance</option>
                                </select>
                            </div>
                            </div>

                            <div className="col-xl-4 col-md-6">
                            <div className="form-group">
                                <label className="form-label float">Upload File</label>
                                <input
                                type="file"
                                className="form-control"
                                onChange={e =>
                                    updateDecRow(
                                    row.id,
                                    'file',
                                    e.target.files?.[0] || null
                                    )
                                }
                                />
                                {row.decURL && (
                                <small>
                                    <a
                                    href={row.decURL}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: '#0057FF' }}
                                    >
                                    View Uploaded Document
                                    </a>
                                </small>
                                )}
                            </div>
                            </div>

                            <div className="col-xl-4 col-md-12">
                            <div className="form-group d-flex gap-2 align-items-end">
                                <div style={{ flex: 1 }}>
                                <label className="form-label float">
                                    Name This Document
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Please enter name of this doc."
                                    value={row.name}
                                    onChange={e =>
                                    updateDecRow(row.id, 'name', e.target.value)
                                    }
                                />
                                </div>
                                {decRows.length > 1 && (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => removeDecRow(row.id)}
                                >
                                    ✕
                                </button>
                                )}
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="add-doc-btn">
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addDecRow}
                        >
                        Add Document <span><img src={plus} alt="" /></span>
                        </button>

                        <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSaveDecDocuments}
                        >
                        Save Documents <span><img src={arrow} alt="" /></span>
                        </button>
                    </div>
                    </div>

                    <div className="dash-hdr">
                        <h3>Letter of Experience (LOE)</h3>
                        <p>Is your insurance history not pulling up? This happens with carriers like AAA and smaller agencies. Call your current insurance provider and ask for a Letter of Experience. You will need this when shopping for new insurance. Once they send it, upload it here.</p>
                    </div>
                    
                    <div className="cmn-box h-auto p-40 my-documents mb-4">
                    {loeRows.map((row) => (
                    <div className="row mb-3" key={row.id}>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label float">Upload File</label>
                            <input
                            type="file"
                            className="form-control"
                            onChange={e =>
                                updateLoeRow(
                                row.id,
                                'file',
                                e.target.files?.[0] || null
                                )
                            }
                            />
                            {row.loeURL && (
                            <small>
                                <a
                                href={row.loeURL}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#0057FF' }}
                                >
                                View Uploaded Document
                                </a>
                            </small>
                            )}
                        </div>
                        </div>

                        <div className="col-md-6">
                        <div className="form-group d-flex gap-2 align-items-end">
                            <div style={{ flex: 1 }}>
                            <label className="form-label float">
                                Name This Document
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Please enter name of this doc."
                                value={row.name}
                                onChange={e =>
                                updateLoeRow(row.id, 'name', e.target.value)
                                }
                            />
                            </div>

                            {loeRows.length > 1 && (
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeLoeRow(row.id)}
                                style={{ height: '38px' }}
                            >
                                ✕
                            </button>
                            )}
                        </div>
                        </div>
                    </div>
                    ))}


                        <div className="add-doc-btn">
                            <button type="button" 
                                className="btn btn-secondary" 
                                onClick={addLoeRow}>
                                Add Document <span><img src={plus} alt="" /></span>
                            </button>
                            <button type="button" 
                                className="btn btn-primary" 
                                onClick={handleSaveLocDocuments}>
                                Save Documents <span><img src={arrow} alt="" /></span>
                            </button>
                        </div>
                    </div>


                    <div className="dash-hdr">
                        <h3>Driver License Correction</h3>
                        <p>Need to correct or change your Driver License Number? Upload your updated license here. Support will review it, and once approved, your driver license number will be updated.</p>
                    </div>
                    <div className="cmn-box h-auto p-40 my-documents">
                        <div className="side-group">
                            <div className="form-group mb-0">
                                <label className="form-label float">Upload File</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={handleDlFileChange}
                                    accept="image/*,application/pdf"
                                />
                            </div>
                            <div className="add-doc-btn">
                                 <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleDlSave}
                                    disabled={loading}
                                >
                                    {loading ? 'Uploading' : 'Save Documents'}
                                    <span>
                                        <img src={arrow} alt="" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        {existingDL && (
                            <div className="mb-2">
                                <div>
                                <small>
                                    <a href={existingDL} target="_blank" rel="noreferrer" style={{ color: '#0057FF' }}>
                                        View Uploaded License
                                    </a>
                                </small>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyDocuments;
