'use client'

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { EyeIcon, Heart, Info, Star } from 'lucide-react'
// import { StarIcon, ThumbsUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as homepageActions from '@/app/actions/homepage-action'
import Link from 'next/link'

export function AdditionalInfoDialog() {
    const [visitors, setVisitors] = useState<number>(0)
    const [likes, setLikes] = useState<number>(0)
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        homepageActions.incrementVisitor().then(setVisitors)
        homepageActions.getStats().then((res) => {
            setVisitors(res.visitors)
            setLikes(res.likes)
        })
    }, [])

    const handleLike = async () => {
        if (liked) return
        setLiked(true)
        const newLikes = await homepageActions.likePortfolio()
        setLikes(newLikes)
    }

    return (
        <Dialog modal={false}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary mr-1">
                    <Info className="w-5 h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[240px] rounded-xl p-4 border border-muted bg-background" overlayClasses="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]  transition-opacity animate-fade-in">
                <DialogHeader className="mb-3 text-center font-semibold text-base">
                    <DialogTitle>
                        Support & Stats
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col space-y-3 text-muted-foreground">

                    {/* visitors */}
                    <div className="flex items-center justify-between w-full hover:text-black transition-colors dark:hover:text-white">
                        <div className="flex items-center gap-2">
                            <EyeIcon className="w-5 h-5" />
                            <span>{visitors} visitors</span>
                        </div>
                    </div>
                    
                    {/* likes */}
                    <button
                        className={cn(
                            'flex items-center justify-between w-full hover:text-pink-500 transition-colors',
                            liked && 'text-pink-500'
                        )}
                        onClick={handleLike}
                    >
                        <div className="flex items-center gap-2">
                            <Heart
                                className="w-5 h-5"
                                fill={liked ? 'currentColor' : 'none'}
                            />
                            <span>{likes} likes</span>
                        </div>
                    </button>
                    
                    {/* star */}
                    <Link
                        href="https://github.com/VineshRajkumar/my-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full hover:text-yellow-500 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            <span>Star on GitHub</span>
                        </div>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}

