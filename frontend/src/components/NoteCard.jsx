import React, { useRef } from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        if (!window.confirm("Are you sure you want to delete this note?")) {
            return;
        }
        try {
            await api.delete(`/notes/${id}`);
            setNotes(prev => prev.filter(note => note._id !== id));
            toast.success("Note deleted successfully!");
        } catch (error) {
            console.log("Error deleting note", error);
            toast.error("Failed to delete note");
        }
    }

    return (
        <motion.div
            drag
            dragElastic={0.5}
            dragMomentum={ true}
            dragTransition={{ power:0.5, timeConstant:2000, bounceStiffness: 600, bounceDamping: 5 }}
            whileDrag={{ scale: 1.05, rotate: 2 }}
            className="cursor-grab active:cursor-grabbing"
        >
            <div className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#605cff]'>
                <div className='card-body'>
                    <h3 className='card-title text-base-content'>{note.title}</h3>
                    <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                    <div className='card-actions justify-between items-center mt-4'>
                        <span className='text-sm text-base-content/60'>
                            {formatDate(new Date(note.createdAt))}
                        </span>
                        <div className='flex items-center gap-1'>
                            <Link to={`/note/${note._id}`}>
                                <PenSquareIcon className='size-4 hover:text-primary transition' />
                            </Link>
                            <button
                                className='btn btn-ghost btn-xs text-error'
                                onClick={(e) => handleDelete(e, note._id)}
                            >
                                <Trash2Icon className='size-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default NoteCard